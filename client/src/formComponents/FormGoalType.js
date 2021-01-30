import React from "react";
import "../styles/Profile.css";

export default class goalType extends React.Component {
  toPersonal = (e) => {
    e.preventDefault();
    this.props.nextPersonal();
  };

  toSocial = (e) => {
    e.preventDefault();
    this.props.nextSocial();
  };

  render() {
    return (
      <div className="formContainer">
        <div className="text">
          <h1>What is your goal?</h1>
        </div>
        <div className="buttonContainer">
          <button className="selectButton" onClick={this.toPersonal}>
            Personal
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="selectButton" onClick={this.toSocial}>
            Social
          </button>
        </div>
      </div>
    );
  }
}
