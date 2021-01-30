import React from "react";
import Button from "@material-ui/core/Button";

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
    const { values, handleChange } = this.props;
    return (
      <div>
        <div>Social Good</div>
        <div>
          <button>Environmental</button>
          <button>Social Button</button>
          <button>Personal</button>
        </div>
        <div className="nextButton">
          <Button variant="contained">Next</Button>
        </div>
      </div>
    );
  }
}
