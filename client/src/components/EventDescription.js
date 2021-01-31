import UserContext from "../context/UserContext";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../styles/Feed.css";
export const EventDescription = (props) => {
  const { goalId } = props.match.params;

  const { userData } = useContext(UserContext);
  const [goals, setGoals] = useState([]);

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
        console.log(goals);
      }
    };
    getCurrentGoals();
  }, [userData]);
  console.log(props);

  return (
    <div className="background">
      <div className="cardContainer">
        <div className="card">
          <h1 className="item" style={{ color: `black` }}>
            Title
          </h1>
          <h4 className="item" style={{ color: `black` }}>
            Is Completed
          </h4>
          <div style={{ display: `flex`, justifyContent: `space-around` }}>
            <h4 className="item" style={{ color: `black` }}>
              Start Date - End Date
            </h4>
          </div>
          <h4 className="item" style={{ color: `black` }}>
            Description
          </h4>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              marginTop: `200px`,
            }}
          >
            <button className="joinButton">JOIN INITIATIVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDescription;
