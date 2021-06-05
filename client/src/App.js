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
          <Route component={error404} />
          <Route exact path="/dashboard" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;