import React from "react";
import { Container } from "reactstrap";
import './loginform.css';
import { FaEnvelope, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <section className="LoginForm_body">
      <Container className="LoginForm_container">
        <div className="header">
          <h2 className="animation a1">Welcome Back</h2>
          <h4 className="animation a2">Log in to your account using email and password</h4>
        </div>
        <div className="form">
          <div className="input-wrapper">
            <span className="LoginForm_icon"><FaEnvelope className=" animation a3"/></span>
            <input type="email" className="form-field animation a3" placeholder="Email Address" name="email" />
          </div>
          <div className="input-wrapper">
             <span className="LoginForm_icon"><FaLock className=" animation a4"/></span>
            <input type="password" className="form-field animation a4" placeholder="Password" name="password" />
          </div>
          <button type="submit" className="animation a5">LOGIN</button>
          <p className="animation a6"><a href="#">Forgot Password</a></p>
        </div>
      </Container>
    </section>
  );
};

export default LoginForm;
