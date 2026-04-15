import React, { useState } from "react";

export default function WorkoutScheduling() {
  const [schedule, setSchedule] = useState([
    { day: "Monday", workout: "Chest & Triceps" },
    { day: "Tuesday", workout: "Back & Biceps" },
    { day: "Wednesday", workout: "Legs" },
    { day: "Thursday", workout: "Shoulders" },
    { day: "Friday", workout: "Full Body" },
  ]);

  const [newDay, setNewDay] = useState("");
  const [newWorkout, setNewWorkout] = useState("");

  const addSchedule = () => {
    if (newDay && newWorkout) {
      setSchedule([...schedule, { day: newDay, workout: newWorkout }]);
      setNewDay("");
      setNewWorkout("");
    }
  };

  const containerStyle = {
    backgroundColor: "#F4F5F7",
    padding: "20px",
    borderRadius: "10px",
    minHeight: "80vh",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    borderBottom: "2px solid #ccc",
    textAlign: "left",
    padding: "12px",
    backgroundColor: "#4B6CB7",
    color: "#fff",
    borderRadius: "4px",
  };

  const tdStyle = {
    borderBottom: "1px solid #ccc",
    padding: "12px",
  };

  const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4B6CB7",
    color: "#fff",
    cursor: "pointer",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Workout Scheduling</div>

      <div>
        <input
          type="text"
          placeholder="Day"
          value={newDay}
          onChange={(e) => setNewDay(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Workout"
          value={newWorkout}
          onChange={(e) => setNewWorkout(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addSchedule} style={buttonStyle}>
          Add
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Day</th>
            <th style={thStyle}>Workout</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.day}</td>
              <td style={tdStyle}>{item.workout}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}