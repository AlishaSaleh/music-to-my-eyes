import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages";
import ProfileSettings from "./pages/ProfileSettings.js";
// import NoMatch from "./pages/NoMatch";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/profile-settings" component={ProfileSettings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;