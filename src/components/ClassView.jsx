import React, { useState } from 'react';
import TimeTableObject from './TimeTableObject';
import { setClass } from '../Firebase/Auth';

function ClassView({ classData }) {
    const [editing, setEditing] = useState(false);
    const [editedSem, setEditedSem] = useState(classData ? classData.sem : 1)
    const [editedRepName, setEditedRepName] = useState(classData ? classData.repName : "-");
    const [editedCoordName, setEditedCoordName] = useState(classData ? classData.coordName : "-");
    const [editedTimetable, setEditedTimetable] = useState(classData ? classData.timetable : new TimeTableObject() );

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        setEditing(false);

        const editedClass = {
            sem: editedSem,
            repName: editedRepName,
            coordName: editedCoordName,
            timetable: editedTimetable
        };

        setClass(editedClass)
    };

    const handleCancelClick = () => {
        setEditing(false);
        setEditedRepName(classData ? classData.repName : "");
        setEditedCoordName(classData ? classData.coordName : "");
        setEditedTimetable(classData ? classData.timetable : new TimeTableObject());
    };

    const handleNameChange = (event, isRepName) => {
        const newValue = event.target.value;
        if (isRepName) {
            setEditedRepName(newValue);
        } else {
            setEditedCoordName(newValue);
        }
    };

    const handleSemChange = (event) => {
      const newValue = event.target.value;
      setEditedSem(newValue)
    }

    const handleClassInfoChange = (event, dayIndex, classIndex, field) => {
        const newValue = event.target.value;
        const updatedTimetable = { ...editedTimetable };
        const day = daysOfWeek[dayIndex];
        if (!updatedTimetable.schedule[day]) {
            updatedTimetable.schedule[day] = [];
        }
        if (!updatedTimetable.schedule[day][classIndex]) {
            updatedTimetable.schedule[day][classIndex] = { subject: "", teacher: "", room: "" };
        }
        updatedTimetable.schedule[day][classIndex][field] = newValue;
        setEditedTimetable(updatedTimetable);
    };

    return (
        <div>
            <h2>Class Information</h2>
            <div>
              <strong>Semester + Section:</strong>
              <input
                    type="text"
                    value={editedSem}
                    onChange={(e) => handleSemChange(e)}
                    disabled={!editing}
                />
            </div>
            <div>
                <strong>Class Representative:</strong>
                <input
                    type="text"
                    value={editedRepName}
                    onChange={(e) => handleNameChange(e, true)}
                    disabled={!editing}
                />
            </div>
            <div>
                <strong>Class Coordinator:</strong>
                <input
                    type="text"
                    value={editedCoordName}
                    onChange={(e) => handleNameChange(e, false)}
                    disabled={!editing}
                />
            </div>
            <div>
                <h3>Time Table:</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {Array.from({ length: 7 }, (_, i) => i + 1).map(period => (
                                <th key={period}>P{period}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {daysOfWeek.map((day, dayIndex) => (
                            <tr key={dayIndex}>
                                <td>{day}</td>
                                {editedTimetable.schedule[day]?.map((classInfo, classIndex) => (
                                    <td key={`${day}-${classIndex}`}>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            value={classInfo.subject}
                                            onChange={(e) => handleClassInfoChange(e, dayIndex, classIndex, 'subject')}
                                            disabled={!editing}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Teacher"
                                            value={classInfo.teacher}
                                            onChange={(e) => handleClassInfoChange(e, dayIndex, classIndex, 'teacher')}
                                            disabled={!editing}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Room"
                                            value={classInfo.room}
                                            onChange={(e) => handleClassInfoChange(e, dayIndex, classIndex, 'room')}
                                            disabled={!editing}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editing ? (
                <>
                    <button onClick={handleSaveClick}>Save</button>
                    {/* <button onClick={handleCancelClick}>Cancel</button> */}
                </>
            ) : (
                <button onClick={handleEditClick}>Edit</button>
            )}
        </div>
    );
}

export default ClassView;
