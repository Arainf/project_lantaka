import React, { useState } from "react";
import { Container } from "reactstrap";
import './loginform.css';
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios'; // Import axios for making HTTP requests

export const LoginForm = () => {
  // State management for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send data to the server
      const response = await axios.post('http://localhost:5000/login', { email, password });
      alert(response.data.message); // Handle success response
    } catch (error) {
      console.error("There was an error!", error);
      alert("Login failed"); // Handle error response
    }
  };

  return (
    <section className="LoginForm_body">
      <Container className="LoginForm_container">
        <div className="header">
          <h2 className="animation a1">Hello Again!</h2>
          <h4 className="animation a2">Welcome Back</h4>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <span className="LoginForm_icon"><FaEnvelope className="animation a3" /></span>
            <input
              type="text"
              className="form-field animation a3"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <span className="LoginForm_icon"><FaLock className="animation a4" /></span>
            <input
              type="password"
              className="form-field animation a4"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="animation a5">LOGIN</button>
          <p className="animation a6"><a href="#">Forgot Password</a></p>
        </form>
      </Container>
    </section>
  );
};

export default LoginForm;
