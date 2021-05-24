import React from "react"
import { Card, Row, Col, Form, Button, Alert, Container, CardDeck } from "react-bootstrap"
const ProfileCard = (props) => {

return (
    
    <CardDeck>
  <Card style={{ width: '5rem' }}>
    <Card.Header> Profile </Card.Header>
    <Card.Body>
      <Card.Title>{props.firstName} {props.lastName}</Card.Title>
      <Card.Text>
        My Email: {props.email}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{ width: '5rem' }}>
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