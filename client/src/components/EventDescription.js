import UserContext from "../context/UserContext";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../styles/Feed.css";
export const EventDescription = (props) => {
  const { goalId } = props.match.params;

  const { userData } = useContext(UserContext);
  const [goals, setGoals] = useState({});

  useEffect(() => {
    const getCurrentGoals = async () => {
      if (userData.token) {
        const goalRes = await axios.get(
          `http://localhost:5000/goals/${goalId}`,
          {
            headers: { "x-auth-token": userData.token },
          }
        );
        setGoals(goalRes.data);
      }
    };
    getCurrentGoals();
  }, [userData]);
  console.log(props);

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const onClick = async () => {
    if (userData.token) {
      const goalRes = await axios.get(
        `http://localhost:5000/users/commitGoal/${goalId}`,
        {
          headers: { "x-auth-token": userData.token },
        }
      );
      setGoals(goalRes.data);
      window.location.href = "/feed";
    }
  };

  return (
    <div className="background">
      <div className="cardContainer">
        <div className="card" style={{ textAlign: "center" }}>
          <h1 className="item" style={{ color: `black` }}>
            {goals.title}
          </h1>
          <h4 className="item" style={{ color: `black` }}>
            {goals.isCompletedEvent}
          </h4>
          <div style={{ display: `flex`, justifyContent: `space-around` }}>
            <h4 className="item" style={{ color: `black` }}>
              {goals.startDate ? goals.startDate : "Start Date"} -{" "}
              {goals.endDate ? goals.endDate : "End Date"}
            </h4>
          </div>
          <h4 className="item" style={{ color: `black` }}>
            {goals.description}
          </h4>

          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              marginTop: `200px`,
            }}
          >
            <button onClick={onClick} className="joinButton">
              JOIN INITIATIVE
            </button>
          </div>
          <h4 className="item" style={{ color: `black` }}>
            {goals.numCommitters ? goals.numCommitters : "0"} People have
            committed to this goal!
          </h4>
        </div>
      </div>
    </div>
  );
};
export default EventDescription;
