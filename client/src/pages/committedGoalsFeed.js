import EventCommitted from "../components/EventCommited";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";
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
}));

export const CommittedFeed = () => {
  const { userData } = useContext(UserContext);
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    const getCurrentGoals = async () => {
      if (userData.token) {
        const goalRes = await axios.get(
          "http://localhost:5000/users/committedEvents",
          {
            headers: { "x-auth-token": userData.token },
          }
        );

        setGoals(goalRes.data);
      }
    };
    getCurrentGoals();
  }, [userData]);

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        {goals ? (
          <Grid container spacing={3}>
            {goals.map((user) => (
              <Grid item xs={4}>
                <EventCommitted data={user} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <p>no goals detected</p>
        )}
      </div>
    </div>
  );
};

export default CommittedFeed;
