import { useState } from "react";
import ClassView from "./components/ClassView";
import { getTimeTableBySemester } from "./Firebase/Auth";

import './Edit.sass'

export default function Edit() {
  
  const [classData, setClassData] = useState(null)
  
  function handleGetData(e) {
    e.preventDefault()
    setClassData(null)

    var data = document.getElementById("get-data-semester").value
    // console.log(data)
    getTimeTableBySemester(data)
    .then(arg => {

      console.log("Received : ", arg)

      if (arg.found) {
        setClassData(arg.data)
        console.log(data, arg.data)
      }
    })
    .catch(() => console.log("No Data"))  
  }

  return (
    <section className="edit">
      <label htmlFor="get-data-semester">Edit Semester Timetable</label>
      <div className="get-data">
        <input type="text" id="get-data-semester" name="get-data-semester" placeholder="Semester / Section" autoComplete="off"/>
        <button onClick={handleGetData}>Get</button>
      </div>
      {
        classData != null ?
          <ClassView classData={classData}></ClassView>:
          <></>
      }
    </section>
  )
}