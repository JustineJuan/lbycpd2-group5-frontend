import React from "react";

const UserContext = React.createContext({
  userLogin: localStorage.getItem("userId"),
  setUsersLogin: () => {},
});

export default UserContext;