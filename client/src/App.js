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
import SpotifyLogin from "./components/SpotifyComp/SpotifyLogin"
import SpotifyDashboard from "./components/SpotifyComp/SpotifyDashboard"
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.js";

const code = new URLSearchParams(window.location.search).get("code")

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
          <Route exact path="/spotify-login" component={SpotifyLogin} />
          <PrivateRoute exact path="/dashboard" component={Profile} />
          code ? <SpotifyDashboard code={code} /> <SpotifyLogin />
          <Route component={error404} />
  
          {/* <Route exact path="/dashboard" component={Profile} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;