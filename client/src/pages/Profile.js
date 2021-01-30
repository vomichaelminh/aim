import React from "react";
import "../styles/Login.css";
import "../styles/Profile.css";
import Button from "@material-ui/core/Button";
import FormGoalType from "../formComponents/FormGoalType.js";
import FormSocialGood from "../formComponents/FormSocialGood.js";
import FormPersonalGoal from "../formComponents/FormPersonalGoal.js";

class Profile extends React.Component {
  state = {
    step: 1,
    goalType: "",
    goalCategory: "",
  };

  specifyState = (type) => {
    this.setState({
      goalType: type,
    });
  };

  toPersonal = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  toSocial = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2,
    });
  };

  prevStep = () => {
    this.setState({
      step: 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { goalType, goalCategory } = this.state;
    const values = { goalType, goalCategory };

    switch (step) {
      case 1:
        return (
          <div className="container">
            <FormGoalType
              nextPersonal={this.toPersonal}
              nextSocial={this.toSocial}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );

      case 2:
        return (
          <div className="container">
            <div>
              <FormPersonalGoal />
            </div>
            <div className="nextButton">
              <Button variant="contained">Next</Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="container">
            <div>
              <FormSocialGood />
            </div>
            <div className="nextButton">
              <Button variant="contained">Next</Button>
            </div>
          </div>
        );

      default:
        console.log("default");
    }
  }
}

export default Profile;
