import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LoginNav = (props) => {

  const reload = () => {
    window.location.reload();
  }

  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
  });

  const createTaskObject = () => {
    const userObject = {
      title: title,
      description: desc
    }
    return userObject;
  }



  const apiCalls = (e) => {
    e.preventDefault();
    axios.post(`/users/${localStorage.getItem("userId")}/addparent`, createTaskObject()).then((res) => {
      reload();
    })
    console.log(`${title} and ${desc}`);

  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="http://localhost:3000/home">TodoEXP</Navbar.Brand>
      <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
      <Nav.Link href="http://localhost:3000/logout">Logout</Nav.Link>
      <Button className="ml-auto" onClick={handleShow}>
        Add new task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>New Task</Modal.Header>
        <Modal.Body>
          <Form onSubmit={apiCalls}>
            <Form.Group controlId="formBasicTask">
              <Form.Label>Title</Form.Label>
              <Form.Control
                defaultValue={title}
                type="text"
                placeholder="Task title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicTaskDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                defaultValue={desc}
                type="text"
                placeholder="Task description"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </Form.Group>
            <Row>
              <Col>
                <Button type="submit" onClick={handleClose}>Create Task</Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default LoginNav;
