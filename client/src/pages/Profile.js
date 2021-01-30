import React from "react";
import "../styles/Login.css";
import "../styles/Profile.css";
import Button from "@material-ui/core/Button";

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="loginCard">
          <div> </div>
          <div className="nextButton">
            <Button variant="contained">Next</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
