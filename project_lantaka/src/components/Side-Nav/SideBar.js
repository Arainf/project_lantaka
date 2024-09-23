import React from 'react';
import { Container } from 'reactstrap';
import './sidebar.css';
import { NavLink } from "react-router-dom";
import { FaIdBadge, FaHome } from "react-icons/fa";
import { FaCalendarPlus, FaCircleQuestion } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import AteneoLogo from './asset-side-nav/AteneoLogo.png';


const navLinks = [
  {
    icon: <FaHome className="icon" />,
    display: "Home",
    url: "/home"
  },
  {
    icon: <FaIdBadge className="icon" />,
    display: "Accounts",
    url: "/account"
  },
  {
    icon: <FaCalendarPlus className="icon" />,
    display: "Reservation",
    url: "/reservation"
  },
];

const navMoreInfo = [
  {
    icon: <FaCircleQuestion className="icon" />,
    display: "Support",
    url: "/"
  },
  {
    icon: <IoSettingsSharp className="icon" />,
    display: "Setting",
    url: "/about"
  },
  {
    icon: <TbBrandReact className="icon" />,
    display: "Version",
    url: "/game"
  },
]

export const SideBar = ({ isOpen }) => {
  return (
    <Container>
      <div className={`sidebar  ${isOpen ? 'open' : 'closed'}`}>
        <div className='sidebar_primary'>
          <img className={`sidebar_logo ${isOpen ? 'open' : 'closed'}`} src={AteneoLogo} alt="AteneoSeal" />
          <h1 className={` ${isOpen ? 'open' : 'closed'}`}>LANTAKA ROOM RESERVATION</h1>
        </div>

        {/* Naviagtion section */}
        <div className="nav_menu">
          <ul className="nav_list">
            {navLinks.map((item, index) => (
              <NavLink
                to={item.url}
                className={({ isActive }) => `sidebar_instance ${isActive ? 'active' : ''} ${isOpen ? 'open' : 'closed'}`}
              >
                {item.icon}
                <li key={index} className={`nav_item  ${isOpen ? 'open' : 'closed'}`}>
                  {item.display}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* More Infos */}
        <div className={`info_menu  ${isOpen ? 'open' : 'closed'}`}>
          <ul className="nav_list">
            {navMoreInfo.map((item, index) => (
              <div className={`sidebar_instance ${isOpen ? 'open' : 'closed'}`}>
                {item.icon}
                <li key={index} className={`nav_item  ${isOpen ? 'open' : 'closed'}`}>
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

export default SideBar;
