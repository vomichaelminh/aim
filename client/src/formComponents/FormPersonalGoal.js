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

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div>
          <h1>Personal Goals</h1>
        </div>
        <button>Professional</button>
        <button>Fitness</button>
        <button>Personal Development</button>
        <button>Other</button>
      </div>
    );
  }
}
