import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountAddToCart = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/countAddToCartProduct', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCount(response.data.count);
      } catch (error) {
        console.error('An error occurred while fetching count:', error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div>
      <h2>Cart Count</h2>
      <p>Number of products in cart: {count}</p>
    </div>
  );
};

export default CountAddToCart;
