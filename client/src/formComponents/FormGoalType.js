import React from "react";
import "../styles/Profile.css";

export default function GoalType(props) {
  const toPersonal = (e) => {
    e.preventDefault();
    props.nextPersonal();
  };

  const toSocial = (e) => {
    e.preventDefault();
    props.nextSocial();
  };

  return (
    <div className="formContainer">
      <div className="text">
        <h1>What is your goal?</h1>
      </div>
      <div className="buttonContainer">
        <button className="selectButton" onClick={toPersonal}>
          Personal
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="selectButton" onClick={toSocial}>
          Social
        </button>
      </div>
    </div>
  );
}
