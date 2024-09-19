import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState(null); // Store the admin_id here
  const navigate = useNavigate();

  // Check if the user is logged in (when the app loads or state changes)
  useEffect(() => {
    const storedAdminId = localStorage.getItem('admin_id');
    if (storedAdminId) {
      setAdminId(storedAdminId);
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.status === 200) {
        const { admin_id } = response.data;
        localStorage.setItem('admin_id', admin_id); // Store in localStorage
        setAdminId(admin_id);
        setIsAuthenticated(true);
        navigate('/home'); // Navigate to home after login
      }
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  // Handle logout
  const logout = () => {
    localStorage.removeItem('admin_id'); // Remove from localStorage
    setAdminId(null);
    setIsAuthenticated(false);
    navigate('/'); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, adminId }}>
      {children}
    </AuthContext.Provider>
  );
};
