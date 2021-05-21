import React from "react";

const UserContext = React.createContext({
  userLogin: "gab",
  setUsersLogin: () => {},
});

export default UserContext;