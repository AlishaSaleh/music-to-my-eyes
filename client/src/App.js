import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProfileSettings from "./pages/ProfileSettings.js";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import error404 from "./pages/404";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile-settings" component={ProfileSettings} />
          <Route exact path="/error404" component={error404} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;