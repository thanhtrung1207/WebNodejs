import React, { useState } from 'react';
import axios from 'axios';

const GetCategoryWiseProduct = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/category-product', { category });
      setProducts(response.data);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi tìm nạp sản phẩm:', error);
    }
  };

  return (
    <div>
      <h2>Category Wise Products</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <button type="submit">Get Products</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetCategoryWiseProduct;
