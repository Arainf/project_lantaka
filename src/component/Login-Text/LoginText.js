import React from "react";
import { Container, Row } from "reactstrap";
import './logintext.css';

export const LoginText = () => {
  return (
    <section>
      <Container>
        <Row>
          <h1>Lantaka Room Reservation</h1>
          <h3>Lantaka Hotel Arcade, N S Valderosa St, Zamboanga, 7000 Zamboanga del Sur</h3>
        </Row>
      </Container>
    </section>
  );
};

export default LoginText;