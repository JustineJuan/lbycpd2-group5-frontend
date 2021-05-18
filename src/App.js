import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// webpages
import Welcome from "./webpages/welcome";
import RegistrationPage from "./webpages/registrationPage";

//components
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
