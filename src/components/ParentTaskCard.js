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
import DatePicker from "react-datepicker";

const ParentTaskCard = (props) => {
  const reload = () => {
    window.location.reload();
  };

  const [finish, setFinish] = useState(() => {
    if(props.status){
      return true;
    } 
    return false; 
  });

  console.log(props.status)
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateShow, setUpdateShow] = useState(false);
  const [startDate, setStartDate] = useState(() => {
    try {
      let dateParts = props.dueDate.split("-");
      let finalDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      return finalDate;
    } catch {
      return null;
    }
  });

  const createChildTaskObject = () => {
    const userObject = {
      title: title,
      description: desc,
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

  const createUpdateTask = () => {
    return {
      title: title,
      description: desc,
      dueDate: startDate,
    };
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseUpdate = () => setUpdateShow(false);
  const handleShowUpdate = () => setUpdateShow(true);

  useEffect(() => {
    setLoaded(true);
  });

  const handleDelete = () => {
    axios
      .delete(`/users/${props.user}/${props.taskId}`)
      .then((res) => reload());
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/users/${props.user}/${props.taskId}`, createUpdateTask())
      .then((res) => {
        console.log(res);
        reload();
      })
      .catch((err) => console.log(err));
  };

  const handleFinishTask = (e) => {
    e.preventDefault();
    axios.put(`/users/${props.user}/${props.taskId}/setStatus`).then((res) => {
      setFinish(true);

    }).then(res => {
      axios.put(`/users/${props.user}/${props.taskId}/finish`, {experience: parseInt(props.experience)}).then((res) => {
        reload();
      });
    })
  };

  let childTasks = props.subtasks;

  console.log(childTasks);

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
        <Card bg={finish ? "light" : "dark"}>
          <Card.Header className={!finish ? "text-secondary" : "text-dark"}>
            <h2>{props.title}</h2>
            <Button
              className="mr-3"
              variant="light"
              onClick={(e) => handleFinishTask(e)}
            >
              {!finish ? "Mark as done" : "Unmark as done"}
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
            <Modal show={updateShow} onHide={handleCloseUpdate}>
              <Modal.Header closeButton>Update Task</Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleUpdate}>
                  <Form.Group controlId="formBasicTask">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      defaultValue={props.title}
                      type="text"
                      placeholder={props.title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicTaskDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      defaultValue={props.description}
                      type="text"
                      placeholder={props.description}
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formaUpdateTaskDesc">
                    <p>Update Date</p>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} isClearable></DatePicker>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button type="submit" onClick={handleShowUpdate}>
                        Update task
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
            </Modal>
            <Button
              className="mt-3"
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
                    <i>{props.description}</i>
                    <p className="mt-2">
                      The due date of this task is:{" "}
                      <b> {props.dueDate != null
                        ? props.dueDate
                        : "no due date set"}</b>
                    </p>
                    <h1>{props.status}</h1>
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
                    parent={props.taskId}
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
