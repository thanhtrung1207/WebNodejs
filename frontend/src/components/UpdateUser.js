import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [formData, setFormData] = useState({ id: '', username: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/update-user', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error('An error occurred while updating user:', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="User ID" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
