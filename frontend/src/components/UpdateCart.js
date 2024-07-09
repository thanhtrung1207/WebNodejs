import React, { useState } from 'react';
import axios from 'axios';

const UpdateCart = () => {
  const [formData, setFormData] = useState({ id: '', quantity: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/update-cart-product', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error('An error occurred while updating cart product:', error);
    }
  };

  return (
    <div>
      <h2>Update Cart</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Product ID" onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
        <button type="submit">Update Cart</button>
      </form>
    </div>
  );
};

export default UpdateCart;
