import { useState } from "react";
import ClassView from "./components/ClassView";
import { getTimeTableBySemster } from "./Firebase/Auth";

export default function Edit() {
  
  const [classData, setClassData] = useState(null)
  
  function handleGetData(e) {
    e.preventDefault()
    setClassData(null)

    var data = document.getElementById("get-data-semester").value
    // console.log(data)
    getTimeTableBySemster(data)
    .then(timetable => {
      setClassData(timetable)
      console.log(data, timetable)
    })
    .catch(() => console.log("No Data"))

    
  }

  return (
    <section className="edit">
      <label htmlFor="get-data-semester">Get Data For Semester: </label>
      <input type="text" id="get-data-semester" name="get-data-semester"/>
      <button onClick={handleGetData}>GET</button>
      {
        classData != null ?
          <ClassView classData={classData}></ClassView>:
          <></>
      }
    </section>
  )
}