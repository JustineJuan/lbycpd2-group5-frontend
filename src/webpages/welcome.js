// welcome component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './../assets/logo.png';
import TodoNav from '../components/navigation';

const Welcome = (props) => {
    return (
        <div>
        <TodoNav />
        <Container fluid>
            <Row className="my-auto">
                <Col>
                    <h1>TodoEXP</h1>
                    <h2>Game-ify your productivity.</h2>
                    <Col>
                    <Image src={logo} thumbnail/>
                    </Col>
                </Col>
                <Col>Being productive can be rather difficult from time to time.
                Let's add some flair to that! TodoEXP is an open-source project for
                LBYCPD2 and SOFDESG under the supervision of Engr. Illahi and Engr. Ligutan.</Col>
            </Row>
        </Container>
        </div>
    );
}

export default Welcome; 