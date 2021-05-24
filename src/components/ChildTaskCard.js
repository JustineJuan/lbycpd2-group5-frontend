import { Row, Col, Container, Card, Button } from "react-bootstrap";
import axios from "axios";

const ChildTaskCard = (props) => {

  const reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <Container>
        <Card className="mb-4">
          <Card.Title className="mt-4">{props.title}</Card.Title>
          <p></p>
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
