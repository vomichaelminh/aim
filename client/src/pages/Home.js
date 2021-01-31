import Rocket from "../images/rocket.png";
import "../styles/Home.css";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";


   


const Home = () => {
  const { userData } = useContext(UserContext);

  // grabs current goals if logged in user
  useEffect(() => {
    const getCurrentGoals = async () => {
      if (userData.token) {
        const goalRes = await axios.get("http://localhost:5000/goals", {
          headers: { "x-auth-token": userData.token },
        });
        window.location.href = "/feed";
      }
    };
    getCurrentGoals();
  }, [userData]);


  const gotoLogin = () =>{
    window.location.href = '/login'
  }
  const gotoRegister = () =>{
    window.location.href = '/register'
  }

  return (
    <div>
  
      {userData.user ? (
        // Show Feed Page

        <h1 style={{ color: "black" }}>You are logged in</h1>
      ) : (
        <div>
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
        <button className="selectButtonHome" onClick={gotoRegister}>Join Now</button>
          <button className="selectButtonHome" onClick={gotoLogin}>Sign In</button>
        </div>
      </div>
    </div>
      
        </div>
      )}
    </div>
  );
};



export default Home;