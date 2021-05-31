import axios from "axios";
import { useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Container,
  CardColumns,
  CardDeck,
  CardGroup,
  InputGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import ParentTaskCard from "./ParentTaskCard";

import UserContext from "./UserContext";

const HomeContent = () => {
  const { userLogin, setUsersLogin } = useContext(UserContext);
  const [currentUserData, setCurrentUserData] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [filterFinish, setFilterFinish] = useState(false);

  useEffect(() => {
    axios
      .get(`/users/${userLogin}`)
      .then((res) => setCurrentUserData(res.data));
    setLoaded(true);
  }, []);

  const handleFilterChange = () => {
    setFilterFinish(!filterFinish);
  };

  let date = new Date();

  let tasks = currentUserData.parentTaskList;

  if (!loaded || tasks == void 0) {
    return (
      <div>
        <h1>Loading files...</h1>
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
                Today is {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
              </h2>
            </Card.Title>
            <Card.Body>
              <ToggleButtonGroup type="checkbox" value="Enable finished filter">
                <ToggleButton
                  value={filterFinish}
                  onChange={handleFilterChange}
                >
                  {!filterFinish
                    ? "View pending tasks"
                    : "View all"}
                </ToggleButton>
              </ToggleButtonGroup>
            </Card.Body>
            <CardColumns>
              {!filterFinish
                ? tasks.map((item) => (
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
                  ))
                : tasks.filter(function (person) {return !person.status}).map((item) => (
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
            </CardColumns>
          </Card>
        </Container>
      </div>
    );
  }
};

export default HomeContent;
