import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './header.css';
import { NavLink } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { FaIdBadge, FaHome } from "react-icons/fa";
import { FaCalendarPlus, FaCircleQuestion } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import axios from 'axios';



const navLinks = [
  {
    icon: <FaHome />,
    display: "Home",
    url: "/home"
  },
  {
    icon: <FaIdBadge />,
    display: "Accounts",
    url: "/about"
  },
  {
    icon: <FaCalendarPlus />,
    display: "Reservation",
    url: "/game"
  },
];

const navMoreInfo = [
  {
    icon: <FaCircleQuestion />,
    display: "Support",
    url: "/"
  },
  {
    icon: <IoSettingsSharp />,
    display: "Setting",
    url: "/about"
  },
  {
    icon: <TbBrandReact />,
    display: "Version",
    url: "/game"
  },
]

export const Header = () => {

  const [profile, setProfile] = useState({
    imageUrl: "", // Will be dynamically fetched
    name: "",
    email: ""
  });

  // Fetch admin profile from server
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile/1');  // Replace '1' with dynamic admin ID
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
      <div className="sidebar">

        {/* profile section */}
        <div className='sidebar_instance'>
          <img src={profile.imageUrl} alt="Profile" className="profile-img" />
          <div className='profile-details'>
            <div className='profile-text'>
              <h4 className="profile-name">{profile.name}</h4>
              <p className="profile-email">{profile.email}</p>
            </div>
            <button className='profile-logout-button'><SlLogout></SlLogout></button>
          </div>
        </div>

        {/* Naviagtion section */}
        <div className="nav_menu">
          <ul className="nav_list">
            {navLinks.map((item, index) => (
              <div className='sidebar_instance'>
                {item.icon}
                <li key={index} className="nav_item">
                  <NavLink
                    to={item.url}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.display}
                  </NavLink>
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* More Infos */}
        <div className="info_menu">
          <ul className="nav_list">
            {navMoreInfo.map((item, index) => (
              <div className='sidebar_instance'>
                {item.icon}
                <li key={index} className="nav_item">
                  <NavLink
                    to={item.url}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.display}
                  </NavLink>
                </li>
              </div>
            ))}
          </ul>
        </div>

      </div>
    </Container>
  );
}

export default Header;
