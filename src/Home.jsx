import { useState } from "react"
import PeriodInfoObject from "./components/PeriodInfoObject"
import TimeTableObject from "./components/TimeTableObject"
import ClassView from "./components/ClassView"

export default function Home() {

  const [timeTables, setTimeTables] = useState(null)

  function handleGet(e) {
    e.preventDefault()

    var room = document.getElementById("get-selector-room").value
    var day = document.getElementById("get-selector-day").value

    console.log(room, day)

  }

  return (
    <section className="home">

      <label htmlFor="get-selector-room">Room No: </label>
      <input type="text" id="get-selector-room" name="get-selector-room"/>

      <label htmlFor="get-selector-day">Day: </label>
      <select name="get-selector-day" id="get-selector-day">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>
        
      <button onClick={handleGet}>Get</button>

      {/* <TimeTable></TimeTable> */}
      <ClassView classData={exampleClass}></ClassView>

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
