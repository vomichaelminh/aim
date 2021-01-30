import React, { useState } from "react";
import Google from "../images/Google.png";
import "../styles/Login.css";
import Button from "@material-ui/core/Button";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const clientId =
  "1065315695970-i9fhvuus3sgaq27t0v385pgn0376qeco.apps.googleusercontent.com";

const responseGoogle = (response) => {
  console.log(response);
  axios
    .post("http://localhost:5000/api/googleLogin", {
      tokenId: response.tokenId,
    })
    .then(function (response) {
      console.log(response);
    });
};

export const Login = () => {
  return (
    <div className="container">
      <div className="Card">
        <div className="loginCard">
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
