import React, { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";

import UserContext from "./UserContext"


const LoginCard = () => {
    let history = useHistory();
    const createUserObject = () => {
        const userObject = {
            username: usernameInput,
            password: passwordInput
        };
        return userObject;
    }
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [exists, setExists] = useState(true);
  const [incorrect, setIncorrect] = useState(false);
 const { userLogin, setUserLogin } = useContext(UserContext);

  const apiCalls = (e) => {
    e.preventDefault();
    axios.post("/auth", createUserObject()).then((res) => {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${res.data.jwt}`,
      };
      setUserLogin(res.data.jwt);
      localStorage.setItem("userId", res.data.userId);
      history.push("/home");
    });
  };

  return (
    <div>
      <Card>
        <Card.Title className="mx-auto mt-3">
          <h2>Login</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={apiCalls}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username or Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your username or email here."
                defaultValue={usernameInput}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password here."
                defaultValue={passwordInput}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Col>
        <Alert variant="warning" className="mt-4" show={disabled}>
          <Alert.Heading>User is disabled!</Alert.Heading>
        </Alert>
        <Alert variant="danger" className="mt-4" show={!exists}>
          <Alert.Heading>User does not exist!</Alert.Heading>
        </Alert>
        <Alert variant="danger" className="mt-4" show={incorrect}>
          <Alert.Heading>Password is incorrect!</Alert.Heading>
        </Alert>
      </Col>
    </div>
  );
};

export default LoginCard;
