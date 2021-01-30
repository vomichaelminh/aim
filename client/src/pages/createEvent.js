import React from "react";
import "../styles/NewEvent.css";

export default class createEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      goals: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let tempEvent = {
      name: this.state.name,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      description: this.state.description,
      goals: this.state.goals,
    };
    console.log(tempEvent); //add functionality to add event
    this.setState({
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      goals: "",
    });
  }

  render() {
    return (
      <div className="background">
        <div className="text">
          <h1>Create New Event</h1>
        </div>
        <div>
          <div className="formContainer">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name of Event"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div>
                <input
                  type="date"
                  name="startDate"
                  placeholder="Start Date"
                  className="date"
                  value={this.state.startDate}
                  onChange={this.handleChange}
                />
                &nbsp;
                <input
                  type="date"
                  name="endDate"
                  placeholder="End Date"
                  className="date"
                  value={this.state.endDate}
                  onChange={this.handleChange}
                />
              </div>
              <input
                type="text"
                name="description"
                placeholder="Event Description"
                className="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <input
                name="goals"
                type="text"
                placeholder="Goals"
                className="goals"
                value={this.state.goals}
                onChange={this.handleChange}
              />
              <input type="submit" value="Submit" className="submitButton" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
