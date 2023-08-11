import React, { useEffect, useState } from "react";

import './ScheduleView.sass'

export default function ScheduleView(props) {

  const [data, setData] = useState(null)

  useEffect(() => {
    setData(props.sem.timetable.schedule[props.day ?? getTodayDay()])
    console.log(data)
  }, [])

  return (
    <div className="schedule-view">
      {data?.map((value, i) => 
        value.subject === "-" ? null:
        <div className="schedule-element" key={i}>
          <div className="subject">{value.subject}</div>
          <div className="teacher">{value.teacher}</div>
          <div className="room"><span>Room</span>{value.room}</div>
          <div className="period">P/{i+1}</div>
        </div>
      )}
    </div>
  )
}

function getTodayDay() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var today = new Date()
  return days[today.getDay()]
}
