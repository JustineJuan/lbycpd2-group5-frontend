import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import axios from "axios";

const LoginNav = (props) => {

  useEffect(() => {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
  })
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="http://localhost:3000/home">TodoEXP</Navbar.Brand>
      <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
      <Nav.Link href="http://localhost:3000/logout">Logout</Nav.Link>
      <Button className="ml-auto">Add new task</Button>
    </Navbar>
  );
};

export default LoginNav;
