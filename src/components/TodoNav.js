import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom"

const TodoNav = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav.Link><Link to="/">TodoEXP</Link></Nav.Link>
      <Nav.Link><Link to="/register">Register</Link></Nav.Link>
      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
      <Nav.Link href="https://github.com/rafgabarceo/lbycpd2-group5">
        Github
      </Nav.Link>
    </Navbar>
  );
};

export default TodoNav;
