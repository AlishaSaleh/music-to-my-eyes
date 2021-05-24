import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages";
// import ProfileSettings from "./pages/ProfileSettings.js";
import SignUp from "./pages/SignUp.js";
// import NoMatch from "./pages/NoMatch";
// import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/profile-settings" component={ProfileSettings} /> */}
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;