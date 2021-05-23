import { Row, Col, Container, Card, Button } from "react-bootstrap";

const ChildTaskCard = (props) => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Title className="">nice</Card.Title>
          <p>Niceu</p>
          <Row>
            <Col>
              <Button className="mr-2" variant="success">
                Finish task
              </Button>
              <Button className="mr-2">Add new child task</Button>
              <Button className="mr-2" variant="info">
                Update task
              </Button>
              <Button className="" variant="danger">
                Delete task
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default ChildTaskCard;
