import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import LoginPage from '@/auth/login/login-page';
import Dashboard from '@/pages/(admin-pages)/dashboard';
// import DashboardRegistrationForm from '@/pages/test/test';
import Reservation from '@/pages/(admin-pages)/reservation';
import EventLogs from '@/pages/(admin-pages)/eventlogs';
import { Component as BarChartComponent } from '@/components/common/charts/BarChartComponent';
import { UserContext } from '@/context/contexts';
import ProtectedRoute from './protectedRoutes';

const AppRoutes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Access context values
  const { userRole, userData } = useContext(UserContext);

  const isDevMode = true; // Set this to true to disable route protection for developers

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<LoginPage />} />

      {/* Admin Dashboard: Protected, but bypassable in Dev Mode */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            element={<Dashboard sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
            allowedRoles={['Administrator']}
            isDevMode={isDevMode}
          />
        }
      />

      <Route
        path="/reservations"
        element={
          <ProtectedRoute
            element={<Reservation sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
            allowedRoles={['Administrator']}
            isDevMode={isDevMode}
          />
        }
      />

      <Route
        path="/eventlogs"
        element={
          <ProtectedRoute
            element={<EventLogs sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
            allowedRoles={['Administrator']}
            isDevMode={isDevMode}
          />
        }
      />

      {/* Test Route */}
      {/* <Route path="/test" element={<DashboardRegistrationForm />} /> */}

      {/* Unauthorized page */}
      <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />

      {/* Redirect based on user role after login */}
      <Route
        path="/auth/login"
        element={
          userRole === 'Administrator' ? (
            <Navigate to="/dashboard" />
          ) : userRole === 'Employee' ? (
            <Navigate to="/dashboard" />
          ) : (
            <LoginPage />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
