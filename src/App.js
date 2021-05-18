import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// webpages
import Welcome from "./webpages/welcome";
import Registration from "./components/registration";

//components
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/register">
          <Registration />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
