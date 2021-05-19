import React, { useState, useEffect } from "react";
import { Card, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axiosConfig from './../axiosConfig'

const valid = (string1, string2) => {
  return string1 == string2;
};

// calls the TodoEXP API and registers the user. Catches any error and returns if the registration was successful.

const RegistrationCard = () => {
  let history = useHistory();
  const createUserObject = () => {
    const userObject = {
      firstName: firstName,
      lastName: lastName,
      email: emailCheck0,
      password: passwordInput0,
      authorities: "USER",
    };
    return userObject;
  };

  const apiCalls = (e) => {
    e.preventDefault();
    axiosConfig.post('/register', createUserObject()).then((res) => {console.log(res)}).catch((err) => {console.log(err)})
    history.push("/register/reqsent");
  };

  const [passwordInput0, setPasswordInput0] = useState("");
  const [passwordInput1, setPasswordInput1] = useState("");
  const [emailCheck0, setEmailCheck0] = useState("");
  const [emailCheck1, setEmailCheck1] = useState("");
  const [alertStatus, setAlertStatus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");

  useEffect(() => {
    console.log("Checking");
    if (
      valid(passwordInput0, passwordInput1) & valid(emailCheck0, emailCheck1)
    ) {
      setAlertStatus(true);
    } else {
      setAlertStatus(false);
    }
  }, [passwordInput0, passwordInput1, emailCheck0, emailCheck1]);

  return (
    <div>
      <Card>
        <Card.Title className="mx-auto mt-3">
          <h2>Registration</h2>
        </Card.Title>
        <Card.Body>
          <p>Let's get you started. We just need some information from you!</p>
          <Form onSubmit={apiCalls}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name here."
                    defaultValue={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name here."
                    defaultValue={lastName}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                defaultValue={emailCheck0}
                onChange={(e) => {
                  setEmailCheck0(e.target.value);
                }}
                type="email"
                placeholder="Enter valid email address here."
              />
              <Form.Text>We will not share your email to anyone.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmailRedo">
              <Form.Label>Re-type email address</Form.Label>
              <Form.Control
                type="email"
                defaultValue={emailCheck1}
                onChange={(e) => {
                  setEmailCheck1(e.target.value);
                }}
                placeholder="Please re-type your email address."
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    defaultValue={passwordInput0}
                    onChange={(e) => {
                      setPasswordInput0(e.target.value);
                    }}
                    type="password"
                    placeholder="Please type your password."
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicPasswordRedo">
                  <Form.Label>Re-type password</Form.Label>
                  <Form.Control
                    defaultValue={passwordInput1}
                    onChange={(e) => {
                      setPasswordInput1(e.target.value);
                    }}
                    type="password"
                    placeholder="Please re-type your password."
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" disabled={!alertStatus} type="submit">
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Col>
        <Alert variant="danger" show={!alertStatus} className="mt-4">
          <Alert.Heading>Email or password not equal!</Alert.Heading>
          <p>
            Most probably you didn't input them correctly. Please try again.
          </p>
        </Alert>
      </Col>
    </div>
  );
};

export default RegistrationCard;
