import React from "react";
import Google from "../images/Google.png";
import "../styles/Login.css";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="loginCard">
          <Button className="buttonGoogle">
            <img alt="Google logo" className="Google-logo" src={Google} />
            Sign in with Google
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
