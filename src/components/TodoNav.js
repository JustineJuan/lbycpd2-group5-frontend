import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TodoNav = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="http://localhost:3000">TodoEXP</Navbar.Brand>
      <Nav.Link href="http://localhost:3000/register">Register</Nav.Link>
      <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
      <Nav.Link href="https://github.com/rafgabarceo/lbycpd2-group5">
        Github
      </Nav.Link>
    </Navbar>
  );
};

export default TodoNav;
