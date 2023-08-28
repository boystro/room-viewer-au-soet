import React, { useEffect, useState } from "react";

import './ScheduleView.sass'

export default function ScheduleView(props) {

  const [data, setData] = useState([])

  useEffect(() => {
    // setData(props.sem.timetable.schedule[props.day ?? getTodayDay()])
    setData(props.schedule[1] ?? [])
    console.log(data)
  }, [props])

  return (
    <div className="schedule-view" key={props.key}>
      <h2>Semester <span>{props.schedule[0]}</span></h2>
      {data?.map((value, i) => 
        value.subject === "-" ? null:
        <div className="schedule-element" key={i}>
          <div className="subject">{value.subject}</div>
          <div className="teacher">{value.teacher.split(',').map((val, i) => <>{val}<br></br></>)}</div>
          <div className="room"><span>Room</span>{value.room == '0'?null:value.room}</div>
          <div className="period">P/{i+1}</div>
        </div>
      )}
    </div>
  )
}