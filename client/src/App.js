import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp.js";
// import NoMatch from "./pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ProfileSettings from "./pages/ProfileSettings.js";
import Navbar from "./components/Navbar";
import error404 from "./pages/404";
import Profile from "./pages/Profile";
import Match from "./pages/Match";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile-settings" component={ProfileSettings} />
          <Route exact path="/error404" component={error404} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/match" component={Match} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;