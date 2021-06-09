import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp.js";
// import NoMatch from "./pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ProfileSettings from "./pages/ProfileSettings.js";
import Navbar from "./components/Navbar";
import error404 from "./pages/404";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SpotifyHome from "./pages/SpotifyHome"
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.js";
import Match from "./pages/Match.js";

//this gives us the query parameter of our URL. In this case it's ?code=
//If we have a code, then we need to render a new component (Spotify Dashboard)
//const code = new URLSearchParams(window.location.search).get("code") 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile-settings" component={ProfileSettings} />
          <PrivateRoute exact path="/dashboard" component={Profile} />
          <PrivateRoute exact path="/match" component={Match} />
          <Route exact path="/spotify-home" component={SpotifyHome} />
          <Route component={error404} />
          {/* <Route exact path="/dashboard" component={Profile} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;