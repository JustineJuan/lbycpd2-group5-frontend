import { useState, useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import ChildTaskCard from "./ChildTaskCard";

const ParentTaskCard = (props) => {
  const [finish, setFinish] = useState(false);

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <h2>{props.title}</h2>
            <Button
              className="mr-3"
              variant="success"
              onClick={(e) => console.log(finish)}
            >
              Finish task
            </Button>
            <Button className="mr-3">Add new child task</Button>
            <Button className="mr-3" variant="info">
              Update task
            </Button>
            <Button className="mr-3" disabled={finish} variant="danger">
              Delete task
            </Button>
          </Card.Header>
          <Card.Body className="p-5">
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    {props.description}
                    <p>This was created on {props.createdDate}</p>
                    <p>Due date is: {props.dueDate}</p>
                    <p>Current status of task: {props.status.toString()}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <ChildTaskCard />
              </Col>
            </Row>
          </Card.Body>
          <p>Experience: {props.exp}</p>
        </Card>
      </Container>
    </div>
  );
};

export default ParentTaskCard;
