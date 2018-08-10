import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Services from "./components/Pages/services";
import Contact from "./components/Pages/contact";
import Promotions from "./components/Pages/promotions";
import Appointments from "./components/Pages/appointments";
import Signup from "./components/Pages/signup";
import Calendar from "./components/Pages/Calendar";

const App = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/promotions" component={Promotions} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/calendar" component={Calendar} />
      </div>
    </Router>
  </div>
);

export default App;
