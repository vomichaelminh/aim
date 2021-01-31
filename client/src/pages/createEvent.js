import React, { useState } from "react";
import "../styles/NewEvent.css";

export default function CreateEvent() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempEvent = {
      name: name,
      startDate: startDate,
      endDate: endDate,
      description: description,
      goals: goals,
    };
    console.log(tempEvent); //add functionality to add event
  };

  return (
    <div className="background">
      <div className="textNewEvent">
        <h1>Create New Event</h1>
      </div>
      <div>
        <div className="formContainer">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name of Event"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                className="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              &nbsp;
              <input
                type="date"
                name="endDate"
                placeholder="End Date"
                className="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <input
              type="text"
              name="description"
              placeholder="Event Description"
              className="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              name="goals"
              type="text"
              placeholder="Goals"
              className="goals"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
            />
            <input type="submit" value="Submit" className="submitButton" />
          </form>
        </div>
      </div>
    </div>
  );
}
