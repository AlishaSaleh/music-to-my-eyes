import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp.js";
// import NoMatch from "./pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ProfileSettings from "./pages/ProfileSettings.js";
import Navbar from "./components/Navbar";
import error404 from "./pages/404";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import store from "./store/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}

  function App() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/profile-settings" component={ProfileSettings} />
              <Route exact path="/error404" component={error404} />
              <Route exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }

  export default App;