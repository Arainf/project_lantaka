import React from 'react';
import { Container } from 'reactstrap';
import './header.css';
import { NavLink } from "react-router-dom";

// Sample profile info (replace with dynamic data if needed)
const profile = {
  imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
  name: "John Doe",
  email: "john.doe@example.com",
};

const navLinks = [
  {
    display: "Home",
    url: "/home"
  },
  {
    display: "About",
    url: "/about"
  },
  {
    display: "Games",
    url: "/game"
  },
  {
    display: "Subjects",
    url: "/subjects"
  },
];

export const Header = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profile.imageUrl} alt="Profile" className="profile-img" />
        <h4 className="profile-name">{profile.name}</h4>
        <p className="profile-email">{profile.email}</p>
      </div>

      <div className="nav_menu">
        <ul className="nav_list">
          {navLinks.map((item, index) => (
            <li key={index} className="nav_item">
              <NavLink
                to={item.url}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
