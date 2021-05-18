import React, {useState, useEffect} from 'react';
import TodoNav from './navigation'
import {
    Card, 
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'

const checkStringValidity = (string1, string2) => {
    const comp1 = new String(string1);
    const comp2 = new String(string2);
    return comp1.localeCompare(comp2);
}

const performClickChecks = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
        formDataObject = Object.fromEntries(formData.entries())
    console.log(formDataObject);
}

const Registration = () => {
    return (
        <div>
            <TodoNav />
            <Row>
                <Col></Col>
                <Col>
                <Card>
                    <Card.Title className = "mx-auto"><h2>Registration</h2></Card.Title>
                    <Card.Body>
                        <p>Let's get you started. We just need some information from you!</p>
                        <Form onSubmit={performClickChecks}>
                            <Row>
                                <Col>                            
                                <Form.Group controlId = "formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name here." />
                            </Form.Group></Col>
                                <Col>
                            <Form.Group controlId = "formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder = "Enter your last name here." />
                            </Form.Group></Col>
                            </Row>
                            <Form.Group controlId = "formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder = "Enter valid email address here." /> 
                                <Form.Text>We will not share your email to anyone.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId = "formBasicEmailRedo">
                                <Form.Label>Re-type email address</Form.Label>
                                <Form.Control type="email" placeholder = "Please re-type your email address." /> 
                            </Form.Group>
                            <Row>
                                <Col>                            <Form.Group controlId = "formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder = "Please type in your password." /> 
                            </Form.Group></Col>
                                <Col>
                            <Form.Group controlId = "formBasicPasswordRedo">
                                <Form.Label>Re-type password</Form.Label>
                                <Form.Control type="password" placeholder = "Please type in your password." /> 
                            </Form.Group></Col>
                            </Row>
                            <Row>
                            <Col>
                                <Button variant="primary" type="submit">Register</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Card.Body>
                </Card></Col>
                <Col></Col>
            </Row>
        <Row>
        </Row>

        </div>
    );
}

export default Registration; 