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
  };

  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

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
      description: desc,
    };
    return userObject;
  };

  const createTaskObjectWithDeadline = () => {
    return {
      title: title, 
      description: desc,
      dueDate: formatDate(startDate)
    }
  }

  const apiCalls = (e) => {
    e.preventDefault();
    console.log("Calling API")
    if(formatDate(startDate) == '1970-01-01'){
      console.log("No date");
      axios
      .post(
        `/users/${localStorage.getItem("userId")}/addparent`,
        createTaskObject()
      )
      .then((res) => {
        console.log(res);
        reload();
      });
    } else {
      console.log("With date");
      axios
      .post(
        `/users/${localStorage.getItem("userId")}/addparent`,
        createTaskObjectWithDeadline()
      )
      .then((res) => {
        console.log(res)
        reload();
      });
      console.log("Sent.")
    }

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
                <p>Due date</p>
                <DatePicker
                  onChange={(date) => {
                    console.log(formatDate(date))
                    setStartDate(date)
                  }}
                  selected={startDate}
                  isClearable
                  placeholderText="No due date."
                ></DatePicker>
              </Col>
            </Row>
            <Button type="submit" onClick={handleClose} className="mt-3">
                  Create Task
                </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default LoginNav;
