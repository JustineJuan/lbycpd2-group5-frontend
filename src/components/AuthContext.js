import React from "react";

const AuthContext = React.createContext({
  authLogin: localStorage.getItem("jwt"),
  setAuthLogin: () => {},
});

export default AuthContext;