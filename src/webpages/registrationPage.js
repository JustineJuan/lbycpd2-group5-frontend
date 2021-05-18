import { Container, Row, Col } from "react-bootstrap";

import RegistrationCard from "./../components/RegistrationCard";
import TodoNav from "./../components/TodoNav";

const RegistrationPage = () => {
  return (
    <div>
      <TodoNav />
      <Container className="mt-5">
        <Row>
          <Col sm></Col>
          <Col sm={10} md={10}>
            <RegistrationCard />
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationPage;
