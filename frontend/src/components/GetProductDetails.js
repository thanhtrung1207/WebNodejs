import React, { useState } from 'react';
import axios from 'axios';

const GetProductDetails = () => {
  const [productId, setProductId] = useState('');
  const [productDetails, setProductDetails] = useState(null);

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/product-details', { id: productId });
      setProductDetails(response.data);
    } catch (error) {
      console.error('An error occurred while fetching product details:', error);
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Product ID" onChange={handleChange} />
        <button type="submit">Get Details</button>
      </form>
      {productDetails && (
        <div>
          <p>Name: {productDetails.name}</p>
          <p>Category: {productDetails.category}</p>
          <p>Price: ${productDetails.price}</p>
        </div>
      )}
    </div>
  );
};

export default GetProductDetails;
