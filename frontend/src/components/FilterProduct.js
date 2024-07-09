import React, { useState } from 'react';
import axios from 'axios';

const FilterProduct = () => {
  const [criteria, setCriteria] = useState({ minPrice: 0, maxPrice: 0 });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/filter-product', criteria);
      setProducts(response.data);
    } catch (error) {
      console.error('An error occurred while filtering products:', error);
    }
  };

  return (
    <div>
      <h2>Filter Products</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="minPrice" placeholder="Min Price" onChange={handleChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange} />
        <button type="submit">Filter</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterProduct;
