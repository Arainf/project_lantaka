import React from "react";
import { Container } from "reactstrap";
import './logintext.css';
// import AdzuLogo from './asset-login-text/Ateneo_de_Zamboanga_University_seal.jpg';

export const LoginText = () => {
  return (
    <section className="LoginText_body">
      <Container>
          {/* <img src={AdzuLogo} alt="Adzu_Logo" className="LoginText_logo"/> */}
          {/* <h1 className="LoginText_headline">Lantaka Room Reservation</h1>
          <h3 className="LoginText_pharagprah">Lantaka Hotel Arcade, N S Valderosa St, Zamboanga, 7000 Zamboanga del Sur</h3> */}
      </Container>
    </section>
  );
};

export default LoginText;