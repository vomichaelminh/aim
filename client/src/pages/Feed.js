
import Event from "../components/Event";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";
import "../styles/Feed.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 80,
    height: "100vh",
    backgroundImage: "linear-gradient(#acc2ff, #a0d9dd)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  navbar: {
    color: "white",
  },
}));

export const Feed = () => {
  const { userData } = useContext(UserContext);
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    const getCurrentGoals = async () => {
      if (userData.token) {
        const goalRes = await axios.get("http://localhost:5000/goals", {
          headers: { "x-auth-token": userData.token },
        });
        setGoals(goalRes.data);
      }
    };
    getCurrentGoals();
  }, [userData]);
  const classes = useStyles();

  const logOff = () => {
    localStorage.setItem("auth-token", "");
    window.location.href = "/";
  };

  return (
    <div>
      <button onClick={logOff}> Log out</button>
      <NavBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {goals.map((user) => (
            <Grid key={user._id} item xs={4}>
              <Event data={user} />
              
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Feed;

