import React, { useState } from "react"
import PeriodInfoObject from "./components/PeriodInfoObject"
import TimeTableObject from "./components/TimeTableObject"
import ClassView from "./components/ClassView"
import { getTimeTable } from "./Firebase/Auth"
import './Home.sass'
import ScheduleView from "./components/ScheduleView"

export default function Home() {

  const [timeTables, setTimeTables] = useState([])
  const [day, setDay] = useState(null)

  function handleGet(e) {
    e.preventDefault()
    setTimeTables([])
    setDay(null)
    var room = document.getElementById("get-selector-room").value
    var day = document.getElementById("get-selector-day").value
    setDay(day)
    getTimeTable(room)
    .then(args => {

      console.log("Home Page: Args : ", args)

      if (args.found)
        setTimeTables(args.data)

      console.log(timeTables)
    })
    .catch(err => console.error(err))
  }

  return (
    <section className="home">

      <h2>Get Schedule</h2>

      <div className="input-row">
        <label htmlFor="get-selector-room">Room No</label>
        <input type="text" id="get-selector-room" name="get-selector-room"/>
      </div>

      <div className="input-row">
        <label htmlFor="get-selector-day">Day</label>
        <select name="get-selector-day" id="get-selector-day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </div>
        
      <button onClick={handleGet}>Get</button>

      {/* <TimeTable></TimeTable> */}
      {/* <ClassView classData={exampleClass}></ClassView> */}
      {/* <ScheduleView day={"Monday"}></ScheduleView> */}

      
      {timeTables.map((timetable, index) =>
          <ScheduleView key={index} sem={timetable} day={day}></ScheduleView>
      )}
    </section>
  )

}


const exampleClass = {
  sem : 3,
  repName: "John Doe",
  coordName: "Jane Smith",
  timetable: new TimeTableObject({
      Monday: [
          new PeriodInfoObject("Math", "Mr. Brown", "101"),
          new PeriodInfoObject("History", "Ms. Johnson", "203"),
          new PeriodInfoObject("Science", "Mrs. White", "304"),
          new PeriodInfoObject("English", "Mr. Smith", "102"),
          new PeriodInfoObject("Physical Education", "Mr. Davis", "Gym"),
          new PeriodInfoObject("Art", "Ms. Wilson", "Art Room"),
          new PeriodInfoObject("Music", "Mr. Clark", "Music Room")
      ],
      Tuesday: [
          new PeriodInfoObject("Science", "Mrs. White", "304"),
          new PeriodInfoObject("Math", "Mr. Brown", "101"),
          new PeriodInfoObject("English", "Mr. Smith", "102"),
          new PeriodInfoObject("History", "Ms. Johnson", "203"),
          new PeriodInfoObject("Physical Education", "Mr. Davis", "Gym"),
          new PeriodInfoObject("Art", "Ms. Wilson", "Art Room"),
          new PeriodInfoObject("Music", "Mr. Clark", "Music Room")
      ],
      Wednesday: [
          new PeriodInfoObject("History", "Ms. Johnson", "203"),
          new PeriodInfoObject("Science", "Mrs. White", "304"),
          new PeriodInfoObject("Math", "Mr. Brown", "101"),
          new PeriodInfoObject("English", "Mr. Smith", "102"),
          new PeriodInfoObject("Physical Education", "Mr. Davis", "Gym"),
          new PeriodInfoObject("Art", "Ms. Wilson", "Art Room"),
          new PeriodInfoObject("Music", "Mr. Clark", "Music Room")
      ],
      Thursday: [
          new PeriodInfoObject("English", "Mr. Smith", "102"),
          new PeriodInfoObject("Math", "Mr. Brown", "101"),
          new PeriodInfoObject("History", "Ms. Johnson", "203"),
          new PeriodInfoObject("Science", "Mrs. White", "304"),
          new PeriodInfoObject("Physical Education", "Mr. Davis", "Gym"),
          new PeriodInfoObject("Art", "Ms. Wilson", "Art Room"),
          new PeriodInfoObject("Music", "Mr. Clark", "Music Room")
      ],
      Friday: [
          new PeriodInfoObject("Physical Education", "Mr. Davis", "Gym"),
          new PeriodInfoObject("Art", "Ms. Wilson", "Art Room"),
          new PeriodInfoObject("Music", "Mr. Clark", "Music Room"),
          new PeriodInfoObject("Science", "Mrs. White", "304"),
          new PeriodInfoObject("Math", "Mr. Brown", "101"),
          new PeriodInfoObject("History", "Ms. Johnson", "203"),
          new PeriodInfoObject("English", "Mr. Smith", "102")
      ]
  })
};
