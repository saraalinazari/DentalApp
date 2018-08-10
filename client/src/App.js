import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";

import NoMatch from "./pages/NoMatch";
import 'tui-calendar/dist/tui-calendar.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route component={NoMatch} />
      </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
