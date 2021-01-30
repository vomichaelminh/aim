import React from "react";

export default class PersonalGood extends React.Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  selected = (e) => {
    e.preventDefault();
    var selectedVal = e.target.value;
  };

  render() {
    return (
      <div className="formContainer">
        <div className="text">
          <h1>Personal Goals</h1>
        </div>
        <div className="buttonContainer">
          <input
            type="button"
            className="options"
            onClick={this.selected}
            value="Professional"
          />
          &nbsp;&nbsp;
          <input
            type="button"
            className="options"
            onClick={this.selected}
            value="Fitness"
          />
          &nbsp;&nbsp;
          <input
            type="button"
            className="options"
            onClick={this.selected}
            value="Personal Dev"
          />
          &nbsp;&nbsp;
          <input
            type="button"
            className="options"
            onClick={this.selected}
            value="Other"
          />
        </div>
        <div className="buttonSecondary">
          <button className="formControl" onClick={this.back}>
            Back
          </button>
          &nbsp;
          <a href="/home">
            <button className="formControl" onClick={this.handleClick}>
              Next
            </button>
          </a>
        </div>
      </div>
    );
  }
}
