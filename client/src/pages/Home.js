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

  return (
    <div>
      {userData.user ? (
        // Show Feed Page

        <h1 style={{ color: "black" }}>You are logged in</h1>
      ) : (
        <div>
          <h2>
            Welcome to Aim, <br></br>please log in to see your goals.
          </h2>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
