import React, { useState, useEffect, useContext } from "react";
import { Container } from "reactstrap";
import WaveHand from './asset-login-form/wave.gif';
import './loginform.css';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fadeClass, setFadeClass] = useState("fade-in");

  const greetings = [
    "Student!", "Professor!", "Ma'am!", "Sir!", "Admin!", "Instructor!",
    "Lecturer!", "Coordinator!", "Advisor!", "Graduate!", "Undergraduate!",
    "Counselor!", "Leader!", "Fellow!", "Colleague!"
  ];

  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setGreeting(prevGreeting => {
          const currentIndex = greetings.indexOf(prevGreeting);
          const nextIndex = (currentIndex + 1) % greetings.length;
          return greetings[nextIndex];
        });
        setFadeClass("fade-in");
      }, 500);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const { login } = useContext(AuthContext); // Get login function from AuthContext

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password); // Call the login function from context
    } catch (error) {
      console.error("There was an error!", error);
      alert("Login failed");
    }
  };

  return (
    <section className="LoginForm_body">
      <Container className="LoginForm_container">
        <div className="header">
          <div className="header_div animation a1">
            <h2 className="">Hello Again!</h2>
            <img src={WaveHand} alt="My GIF" />
          </div>
          <h4 className="animation a2">Welcome Back <strong className={'${fadeClass}'} style={{ color: '#ef4565' }}>{greeting}</strong></h4>
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
          <button type="submit" className="button-27 animation a5">LOGIN</button>
          <p className="animation a6"><a href="#">Forgot Password</a></p>
        </form>
      </Container>
    </section>
  );
};

export default LoginForm;