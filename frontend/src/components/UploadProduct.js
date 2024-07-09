import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct = () => {
  const [formData, setFormData] = useState({ name: '', category: '', price: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/upload-product', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error('An error occurred while uploading product:', error);
    }
  };

  return (
    <div>
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} />
        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default UploadProduct;
