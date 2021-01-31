import React, { useState, useEffect, useContext } from "react";
import "../styles/NewEvent.css";
import UserContext from "../context/UserContext";
import axios from "axios";
import { Title } from "@material-ui/icons";

export default function CreateEvent(props) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");

  const { userData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newGoal = {
        title: title,
        startDate: startDate,
        endDate: endDate,
        description: description,
        goals: goals,
      };
      console.log(newGoal);
      await axios.post("http://localhost:5000/goals", newGoal, {
        headers: { "x-auth-token": userData.token },
      });

      console.log("Goal sucessfully added!");
      window.location.href = "/feed";
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="background">
      <div className="text">
        <h1>Create New Event</h1>
      </div>
      <div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name of Event"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
