import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'reactstrap';
import './registerform.css';

export const RegisterForm = () => {
  // State management for input fields
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null); // State for profile image

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(); // Using FormData to handle file upload

    formData.append("username", email);  // 'username' stored as 'admin_email' in DB
    formData.append("firstName", firstName);
    formData.append("surName", surName);
    formData.append("password", password);
    if (profileImage) {
      formData.append("profileImage", profileImage); // Append image if selected
    }

    try {
      // Send data to the server for registration
      const response = await axios.post('http://localhost:5000/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for file upload
        }
      });

      console.log(response.data.message); // Handle success response
      if (response.status === 201) {
        navigate('/login'); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("Registration failed"); // Handle error response
    }
  };

  // Handle image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  return (
    <Container>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>SurName:</label>
            <input
              type="text"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterForm;
