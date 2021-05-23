import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import ParentTaskCard from "./ParentTaskCard";

import UserContext from "./UserContext";

const HomeContent = () => {
  const { userLogin, setUsersLogin } = useContext(UserContext);
  const [currentUserData, setCurrentUserData] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/users/${userLogin}`)
      .then((res) => setCurrentUserData(res.data));
    setLoaded(true);
  }, []);

  let date = new Date();

  let tasks = currentUserData.parentTaskList;

  console.log(tasks);

  if (!loaded || tasks == void 0) {
    return (
      <div>
        <h1>Loading files...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Container className="p-5">
          <h1>Hello, {currentUserData.firstName}</h1>
          <Card className="text-center">
            <Card.Title className="mt-3">
              <h2>
                Today is {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
              </h2>
            </Card.Title>
            {tasks.map((item) => (
              <ParentTaskCard
                key={item.parentId}
                title={item.title}
                description={item.description}
                dueDate={item.dueDate}
                createdDate={item.createdAt}
                status={item.status}
                exp={item.experience}
                subtasks={item.childTasks}
              />
            ))}
          </Card>
        </Container>
      </div>
    );
  }
};

export default HomeContent;
