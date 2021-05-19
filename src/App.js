import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// webpages
import Welcome from "./webpages/welcome";
import RegistrationPage from "./webpages/registrationPage";
import RegistrationLinkSent from "./webpages/registrationLinkSent";
import LoginPage from './webpages/loginPage';

//components
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/register/reqsent">
          <RegistrationLinkSent />
        </Route>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/login">

        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
