import { Routes, Route } from "react-router-dom";
import Login from './page/login';
import Home from "./page/home";
import Account from "./page/account";
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path="/account" element={<Account sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />} />
      </Routes>
    </>
  );
}

export default App;
