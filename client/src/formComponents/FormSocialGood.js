import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/Profile.css";

export default class SocialGood extends React.Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
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
          <button className="formControl" onClick={this.back}>
            Back
          </button>
          &nbsp;
          <button className="formControl">Next</button>
        </div>
      </div>
    );
  }
}
