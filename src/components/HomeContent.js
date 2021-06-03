import axios from "axios";
import { useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap";
import ParentTaskCard from "./ParentTaskCard";
import logo from "./../assets/logo.png";

import UserContext from "./UserContext";

const HomeContent = () => {
  const { userLogin, setUsersLogin } = useContext(UserContext);
  const [currentUserData, setCurrentUserData] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [filterFinish, setFilterFinish] = useState(false);

  const reload = () => {
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(`/users/${userLogin}`)
      .then((res) => setCurrentUserData(res.data));
    setLoaded(true);
  }, []);

  const handleFilterChange = () => {
    setFilterFinish(!filterFinish);
  };

  const finishAll = (e) => {
    e.preventDefault();
    axios.put(`/users/${userLogin}/finishAll`).then((res) => {
      console.log(res);
      reload();
    });
  };

  const unFinishAll = (e) => {
    e.preventDefault();
    axios.put(`/users/${userLogin}/undofinish`).then((res) => {
      console.log(res);
      reload();
    });
  };

  let date = new Date();

  let tasks = currentUserData.parentTaskList;

  if (!loaded || tasks == void 0) {
    return (
      <div>
        <h1>Loading files...</h1>
      </div>
    );
  } else if (tasks.length < 1) {
    return (
      <div>
        <Container fluid className="m-4">
          <h1>
            Hello, {currentUserData.firstName}! It seems that you don't have any
            tasks.
          </h1>
          <br />
          <h2>Click on the "Add new task" to create a new task!</h2>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={4} md={4}>
              <Image src={logo}></Image>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container fluid className="m-4">
          <h1>Hello, {currentUserData.firstName}</h1>
          <Card className="text-center style={width: 15rem}">
            <Card.Title className="mt-3">
              <h2>
                Today is {date.getMonth() +1}/{date.getDate()}/{date.getFullYear()}
                {/* + */}
              </h2>
            </Card.Title>
            <Row>
              <Col>
                <h1>Pending tasks</h1>
                <ButtonGroup aria-label="actions">
                  <Button variant="secondary" onClick={finishAll}>
                    Mark all as done
                  </Button>
                </ButtonGroup>
                {tasks
                  .filter(function (person) {
                    return !person.status;
                  })
                  .map((item) => (
                    <ParentTaskCard
                      key={item.parentId}
                      taskId={item.parentId}
                      user={item.userId}
                      title={item.title}
                      description={item.description}
                      dueDate={item.dueDate}
                      createdDate={item.createdAt}
                      status={item.status}
                      exp={item.experience}
                      subtasks={item.childTasks}
                    />
                  ))}
              </Col>
              <Col>
                <h1>Accomplished tasks</h1>
                <ButtonGroup aria-label="actions">
                  <Button variant="secondary" onClick={unFinishAll}>
                    Unmark all tasks
                  </Button>
                </ButtonGroup>
                {tasks
                  .filter(function (person) {
                    return person.status;
                  })
                  .map((item) => (
                    <ParentTaskCard
                      key={item.parentId}
                      taskId={item.parentId}
                      user={item.userId}
                      title={item.title}
                      description={item.description}
                      dueDate={item.dueDate}
                      createdDate={item.createdAt}
                      status={item.status}
                      exp={item.experience}
                      subtasks={item.childTasks}
                    />
                  ))}
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
};

export default HomeContent;
