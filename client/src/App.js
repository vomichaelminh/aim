import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
