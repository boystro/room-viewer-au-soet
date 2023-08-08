import { getTimeTable } from "../Firebase/Auth";
import ClassView from "./ClassView"
import PeriodInfoObject from "./PeriodInfoObject";
import TimeTableObject from "./TimeTableObject";

export default function Home() {

  return (
    <section className="home">
      
      <button onClick={() => getTimeTable(2104)}>Get</button>

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
