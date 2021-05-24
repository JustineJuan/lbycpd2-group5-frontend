// welcome component
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "./../assets/logo.png";
import TodoNav from "../components/TodoNav";

const Welcome = (props) => {
  return (
    <div>
      <TodoNav />
      <Container fluid>
        <Row className="p-5 m-4">
          <Col>
            <h1>TodoEXP</h1>
            <h2>Game-ify your productivity.</h2>
            <Col>
              <Image src={logo} thumbnail />
            </Col>
          </Col>
          <Col>
            <p>Being productive can be rather difficult from time to time. Let's
            add some flair to that! TodoEXP is an open-source project for
            LBYCPD2 and SOFDESG under the supervision of Engr. Illahi and Engr.
            Ligutan.</p>
            <p>
              Here are the things that have been implemented: <br/>
              [x] - User authentication and authorization with the back-end
              [x] - JWT implementation
              [x] - Adding of tasks. <br/>
              [x] - Deleting of tasks. <br/>
              [x] - Adding of child tasks. <br/>
              [x] - Loading everything into the front-end through react <br/>
              [x] - Dynamic loading of tasks in the front-end <br/>
              [ ] - Experience points <br/>
              [ ] - Profile page
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
