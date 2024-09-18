import React, { useEffect, useState } from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { GiHamburgerMenu } from "react-icons/gi";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Header = ({ onSidebarToggle }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    imageUrl: "", // Will be dynamically fetched
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setLoading(true); // Show spinner
      try {
        // Simulate a delay for logout process (replace with actual logout logic)
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async logout
        // Perform any logout logic here if needed (e.g., clearing tokens)
        navigate('/');  // Redirect to the login page
      } catch (error) {
        console.error("Error during logout:", error);
      } finally {
        setLoading(false); // Hide spinner
      }
    }
  };

  // Fetch admin profile from server
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const adminId = localStorage.getItem('admin_id');
        const response = await axios.get(`http://localhost:5000/api/profile/${adminId}`);  // Replace '1' with dynamic admin ID
        const data = response.data;
        setProfile({
          imageUrl: data.imageUrl || "https://via.placeholder.com/150", // Default image if no image available
          name: `${data.firstName}`,
          email: data.email,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container>
      <div className="header_body">
        <div className='header_div1'>
          <div className='menu' onClick={onSidebarToggle}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div>
          <div className="profile">
            {/* profile section */}
            <div className='profile_primary'>
              <img src={profile.imageUrl} alt="Profile" className="profile-img" />
              <div className='profile-details'>
                <div className='profile-text'>
                  <h4 className="profile-name">{profile.name}</h4>
                  <p className="profile-email">{profile.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className='profile-logout-button'>
                  <SlLogout />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spinner overlay */}
      {loading && (
        <div className="spinner-overlay">
          <div className="loader"></div>
        </div>
      )}
    </Container>
  );
}

export default Header;
