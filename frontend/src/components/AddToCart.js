import React, { useState } from 'react';
import axios from 'axios';

const AddToCart = () => {
  const [productId, setProductId] = useState('');

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/addtocart', { productId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi thêm vào giỏ hàng:', error);
    }
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productId" placeholder="Product ID" onChange={handleChange} />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default AddToCart;
