import React, {useState, } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// webpages
import Welcome from "./webpages/welcome";
import RegistrationPage from "./webpages/registrationPage";
import RegistrationLinkSent from "./webpages/registrationLinkSent";
import LoginPage from "./webpages/loginPage";
import Home from "./webpages/home";

//components
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./components/UserContext"

axios.defaults.baseURL = "http://localhost:8080";


function App() {
  //axios.defaults.baseURL = "http://34.126.112.11:8080";
  const [userLogin, setUserLogin] = useState("gab");
  const value = { userLogin, setUserLogin };

  return (
    <div>
      <UserContext.Provider value={value}>
      <Switch>
        <Route path="/register/reqsent">
          <RegistrationLinkSent />
        </Route>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
