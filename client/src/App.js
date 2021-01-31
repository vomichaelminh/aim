import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import React from "react";
import committedGoals from "./pages/committedGoals";
import createdGoals from "./pages/createdGoals";
import newEvent from "./pages/createEvent";
import Home from "./pages/Home";
export const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={Feed} />
          <Route path="/committedGoals" component={committedGoals} />
          <Route path="/createdGoals" component={createdGoals} />
          <Route path="/newevent" component={newEvent} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
