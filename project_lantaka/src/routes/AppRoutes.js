// src/routes/index.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../page/home'
import Login from '../page/login';
import Account from '../page/account';

function AppRoutes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />} />
      <Route path="/account" element={<Account sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />} />
    </Routes>
  );
}

export default AppRoutes;
