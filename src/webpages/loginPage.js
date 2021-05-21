import LoginCard from "./../components/LoginCard";
import TodoNav from "./../components/TodoNav";
import { Container, Row, Col } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div>
      <TodoNav />
      <Container className="mt-5">
        <Row>
          <Col sm></Col>
          <Col sm={10} md={10}>
            <LoginCard />
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
