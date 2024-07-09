import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({ id: '', name: '', category: '', price: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/update-product', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error('An error occurred while updating product:', error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Product ID" onChange={handleChange} />
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
