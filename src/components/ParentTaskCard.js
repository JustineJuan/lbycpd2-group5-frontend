import axios from "axios";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import ChildTaskCard from "./ChildTaskCard";
import "react-datepicker/dist/react-datepicker.css";

const ParentTaskCard = (props) => {
  const reload = () => {
    window.location.reload();
  };

  const [finish, setFinish] = useState(false);
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const createChildTaskObject = () => {
    const userObject = {
      title: title,
      desc: desc,
    };

    return userObject;
  };

  const apiCalls = (e) => {
    e.preventDefault();
    axios
      .post(
        `/users/${localStorage.getItem("userId")}/${props.taskId}/addchild`,
        createChildTaskObject()
      )
      .then((res) => {
        console.log(res);
        reload();
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseUpdate = () => setShow(false);
  const handleShowUpdate = () => setShow(true);

  useEffect(() => {
    setLoaded(true);
  });

  const handleDelete = () => {
    axios
      .delete(`/users/${props.user}/${props.taskId}`)
      .then((res) => reload());
  };

  const handleUpdate = () => {
    axios.put(`/users/${props.user}/${props.taskId}`)
  }

  const handleFinishTask = (e) => {
    e.preventDefault();
    axios.put(`users/${props.user}/${props.taskId}/setStatus`).then((res) => {
      setFinish(true);
      reload();
    });
  }

  let childTasks = props.subtasks;

  console.log("child tasks" + childTasks);

  if (!loaded || childTasks == void 0) {
    return (
      <div>
        <h4>Loading task...</h4>
      </div>
    );
  }

  return (
    <div>
      <Container className="mt-4">
        <Card>
          <Card.Header>
            <h2>{props.title}</h2>
            <Button
              className="mr-3"
              variant="success"
              onClick={(e) => handleFinishTask(e)}
              disabled={finish}
            >
              Toggle progress
            </Button>
            <Button className="mr-3" onClick={handleShow}>
              Add new child task
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>New Child Task</Modal.Header>
              <Modal.Body>
                <Form onSubmit={apiCalls}>
                  <Form.Group controlId="formBasicTask">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      defaultValue={title}
                      type="text"
                      placeholder="Task title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicTaskDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      defaultValue={desc}
                      type="text"
                      placeholder="Task description"
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button type="submit" onClick={handleClose}>
                        Create Task
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
            </Modal>
            <Button className="mr-3" variant="info" onClick={handleShowUpdate}>
              Update task
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>Update Task</Modal.Header>
              <Modal.Body>
                <Form onSubmit={apiCalls}>
                  <Form.Group controlId="formBasicTask">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      defaultValue={title}
                      type="text"
                      placeholder="Task title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicTaskDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      defaultValue={desc}
                      type="text"
                      placeholder="Task description"
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button type="submit" onClick={handleClose}>
                        Create Task
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
            </Modal>
            <Button
              className="mr-3"
              disabled={finish}
              variant="danger"
              onClick={handleDelete}
            >
              Delete task
            </Button>
          </Card.Header>
          <Card.Body className="p-5">
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    {props.description}
                    <p>The due date of this task is: {(props.dueDate != null) 
                    ? props.dueDate : "no due date set"}</p>
                    <p>Current status of task: {props.status.toString()}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {childTasks.map((item) => (
                  <ChildTaskCard
                    key={item.childId}
                    id={item.childId}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                  />
                ))}
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
