import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { child, get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGmdsSAzl6T1AASEZp_NcI68AsDjqkJvQ",
  authDomain: "timetablesoet.firebaseapp.com",
  projectId: "timetablesoet",
  storageBucket: "timetablesoet.appspot.com",
  messagingSenderId: "815191134373",
  appId: "1:815191134373:web:7bab016131fb0440193d4c",
  measurementId: "G-NT72CLFWRC",
  databaseURL: "https://timetablesoet-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export function setClass(classdata) {
  var r = ref(db, classdata.sem.toString())
  set(r, classdata)
}

export async function getAllRooms() {
  var r = child(ref(db), '/')

  var jsonData = {}

  await get(r)
  .then(snapshot => {
    var found = snapshot.exists()
    if (found)
      jsonData = snapshot.val()
  })
  .catch(err => console.log(err))

  return extractRoomNumbers(jsonData)
}

export async function getDaySchedule(room_no, day) {
  
  if (room_no === "" || day === "")
    return { found: false, data:[] };

  
  var found = true;
  var data = {};
  
  var dbr = child(ref(db), `/`);
  await get(dbr)
  .then(snapshot => {
    found = snapshot.exists();
    if (found)
      data = snapshot.val();
  })
  .catch(e => console.error(e));

  return { data:filterSemestersByRoomAndDay(data,room_no,day), found:found };
}

function filterSemestersByRoomAndDay(data, room, day) {
  var filteredData = [];

  for (const semesterNumber in data) {
    const semester = data[semesterNumber];
    const timetable = semester.timetable?.schedule || {};
    const dailySchedule = timetable[day];
    for (const entry of dailySchedule) {
      var roomStr = entry.room.toString();
      if (roomStr === "0") continue;

      roomStr = roomStr.split(',');
      if (roomStr.includes(room)) {
        filteredData.push([semesterNumber, dailySchedule]);
        break;
      }
    }
  }

  return filteredData;
}


export async function getTimeTableBySemester(semesterNo) {
  var r = child(ref(db), `/${semesterNo}`)

  var found = true
  var jsonData = {}

  if (semesterNo === "") {
    return {
      found:false,
      data:{}
    }
  }

  await get(r)
  .then(snapshot => {
    console.log(snapshot)
    found = snapshot.exists()
    if (found) {
      jsonData = snapshot.val()
    }
  })
  .catch(err => console.log(err))

  return {found:found,data:jsonData}
}

export async function getTimeTable(room_no) {
  var r = child(ref(db), '/')

  if (room_no === "")
    return { found:false, data:[] }

  var found = true
  var jsonData = {}

  await get(r)
  .then(snapshot => {
    found = snapshot.exists()
    if (found)
      jsonData = snapshot.val()
  })
  .catch(error => console.error(error) )

  var ret = {data:filterSemestersByRoom(jsonData, room_no.toString()),found:found}
  return ret
}

function filterSemestersByRoom(jsonData, roomNumber) {
  const filteredSemesters = [];

  for (const semesterNumber in jsonData) {
    const semester = jsonData[semesterNumber];
    const timetable = semester.timetable?.schedule || {};

    for (const dayOfWeek in timetable) {
      const dailySchedule = timetable[dayOfWeek];

      for (const entry of dailySchedule) {
        // previous logic
        var roomStr = entry.room.toString()
        if (roomStr === "0")
          continue

        roomStr = roomStr.split(',')
        if (roomStr.includes(roomNumber)) {
          console.log(roomStr)
          filteredSemesters.push(semester)
          break
        }
      }
      
      // If we've already found a match in this semester, no need to continue searching
      if (filteredSemesters.includes(semester)) {
        break;
      }
    }
  }

  return filteredSemesters;
}

function extractRoomNumbers(jsonData) {
  const roomNumbers = new Set();

  for (const semesterNumber in jsonData) {
    const semester = jsonData[semesterNumber];
    const timetable = semester.timetable?.schedule || {};
    for (const dayOfWeek in timetable) {
      const dailySchedule = timetable[dayOfWeek];
      for (const entry of dailySchedule) {
        var roomStr = entry.room
        // console.log(roomStr)
        if (roomStr && roomStr !== "0") {
          const rooms = roomStr.split(',');
          for (const room of rooms) {
            roomNumbers.add(room.trim());
          }
        }
      }
    }
  }

  return Array.from(roomNumbers).sort();
}