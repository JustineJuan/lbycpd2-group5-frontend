import { Row, Col, Container, Card, Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";

const ChildTaskCard = (props) => {

  console.log(props)

  const reload = () => {
    window.location.reload();
  };
  
  const deleteCall = (e) => {
    e.preventDefault();
    axios.delete(`users/${localStorage.getItem("userId")}/${props.parent}/${props.id}`).then((res) => {
      console.log(res)
      reload()
    })
  }

  return (
    <div>
      <Container>
        <Card className="">
          <Card.Title className="mt-4">{props.title}</Card.Title>
          <Card.Body>
            {props.description}
            <ButtonGroup>
              <Button onClick={deleteCall}>Delete</Button>
            </ButtonGroup>
          </Card.Body>
          <Row>
            <Col>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default ChildTaskCard;
