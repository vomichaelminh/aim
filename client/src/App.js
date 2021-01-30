import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import React, { useState, useEffect } from "react";
import committedGoals from "./pages/committedGoals";
import createdGoals from "./pages/createdGoals";
import UserContext from "./context/UserContext";
import Register from "./pages/Register";
import axios from "axios";

export const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedin = async () => {
      // grab current token in browser
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedin();
  }, []);

  return (
    <div>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />

            <Route path="/feed" component={Feed} />
            <Route path="/committedGoals" component={committedGoals} />
            <Route path="/createdGoals" component={createdGoals} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
