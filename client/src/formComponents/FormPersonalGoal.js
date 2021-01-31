import React from "react";

export default function PersonalGood(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const selected = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formContainer">
      <div className="text">
        <h1>Personal Goals</h1>
      </div>
      <div className="buttonContainer">
        <input
          type="button"
          className="options"
          onClick={selected}
          value="Professional"
        />
        &nbsp;&nbsp;
        <input
          type="button"
          className="options"
          onClick={selected}
          value="Fitness"
        />
        &nbsp;&nbsp;
        <input
          type="button"
          className="options"
          onClick={selected}
          value="Personal Dev"
        />
        &nbsp;&nbsp;
        <input
          type="button"
          className="options"
          onClick={selected}
          value="Other"
        />
      </div>
      <div className="buttonSecondary">
        <button className="formControl" onClick={back}>
          Back
        </button>
        &nbsp;
        <a href="/home">
          <button className="formControl" onClick={next}>
            Next
          </button>
        </a>
      </div>
    </div>
  );
}
