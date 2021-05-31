import React, {useState, } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// webpages
import Welcome from "./webpages/welcome";
import RegistrationPage from "./webpages/registrationPage";
import RegistrationLinkSent from "./webpages/registrationLinkSent";
import LoginPage from "./webpages/loginPage";
import Home from "./webpages/home";
import Profile from "./webpages/profile";
import LogoutRedirect from "./webpages/logoutRedirect";

//components
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./components/UserContext"
// 34.126.112.11
axios.defaults.baseURL = "http://34.126.112.11:8080";
document.body.style = 'background: white'
function App() {
  const [userLogin, setUserLogin] = useState(localStorage.getItem("userId"));
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
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/logout">
          <LogoutRedirect />
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
