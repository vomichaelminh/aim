import React from "react";
import "../styles/Profile.css";

export default function SocialGood(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep(); //TODO
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div className="formContainer">
      <div className="text">
        <h1>Social Good</h1>
      </div>
      <div className="buttonContainer">
        <button className="options">Volunteer</button>
        &nbsp;&nbsp;
        <button className="options">Fundraising</button>
        &nbsp;&nbsp;
        <button className="options">Environmental</button>
        &nbsp;&nbsp;
        <button className="options">Other</button>
      </div>
      <div className="buttonSecondary">
        <button className="formControl" onClick={back}>
          Back
        </button>
        &nbsp;
        <button className="formControl" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
