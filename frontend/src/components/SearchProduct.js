import React, { useState } from 'react';
import axios from 'axios';

const SearchProduct = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      setProducts(response.data);
    } catch (error) {
      console.error('An error occurred while searching products:', error);
    }
  };

  return (
    <div>
      <h2>Search Products</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search query" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchProduct;
