import React, { useState } from 'react';
import axios from 'axios';

const DeleteCart = () => {
  const [productId, setProductId] = useState('');

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/delete-cart-product', { productId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error('An error occurred while deleting cart product:', error);
    }
  };

  return (
    <div>
      <h2>Delete Cart Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productId" placeholder="Product ID" onChange={handleChange} />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteCart;
