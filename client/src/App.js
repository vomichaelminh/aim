import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feed from './pages/Feed'
import React from 'react'
import committedGoals from './pages/committedGoals'
import createdGoals from './pages/createdGoals'

export const App = () => {
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route path="/committedGoals" component={committedGoals} />
          <Route path="/createdGoals" component={createdGoals} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;