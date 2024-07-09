import React, { useEffect } from 'react';
import axios from 'axios';

const UserLogout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get('/api/userLogout');
        localStorage.removeItem('token');
        // Redirect to login or home page
      } catch (error) {
        console.error('An error occurred during logout:', error);
      }
    };

    logout();
  }, []);

  return <div>Logging out...</div>;
};

export default UserLogout;
