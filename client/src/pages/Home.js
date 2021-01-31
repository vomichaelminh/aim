import React, { useState } from "react";
import Rocket from "../images/rocket.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="background">
      <div className="textHome">
        <h1>Aim</h1>

        <img
          alt="rocket"
          src={Rocket}
          style={{
            width: "60px",
            height: "60px",
            margin: "70px",
            marginLeft: 20,
            marginRight: 0,
          }}
        />
      </div>
      <div className="containerSecondary">
        <h2>Achieve goals now with your local community</h2>
        <div className="buttonContainerHome">
          <button className="selectButtonHome">Join Now</button>
          <button className="selectButtonHome">Sign In</button>
        </div>
      </div>
    </div>
  );
}
