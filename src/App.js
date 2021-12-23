import Login from "./components/Login";
import Register from "./components/Register";
import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
    };
  }
  render() {
    const { user } = this.state;
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            {user ? (
              <Route path="/dashboard" element={<Dashboard user={user} />} />
            ) : null}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
