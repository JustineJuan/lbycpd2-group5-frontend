import React from "react"
import { Card, Row, Col, Form, Button, Alert, Container, CardDeck } from "react-bootstrap"
const ProfileCard = (props) => {

return (
    
    <CardDeck>
  <Card bg="dark" text ="white" style={{ width: '2rem' }}>
    <Card.Header> Profile </Card.Header>
    <Card.Body>
      <Card.Title>{props.firstName} {props.lastName}</Card.Title>
      <Card.Text>
        My Email: {props.email} <br/>
        Current Experience: {props.experience}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card bg="dark" text ="white" style={{ width: '2rem' }}>
  <Card.Header> Badges </Card.Header>
    <Card.Body>
      <Card.Title>Badges</Card.Title>
      <Card.Text>
        Badges here.
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</CardDeck>
 
 

  
        





)


}










export default ProfileCard