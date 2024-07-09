import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/view-card-product', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartProducts(response.data);
      } catch (error) {
        console.error('An error occurred while fetching cart products:', error);
      }
    };

    fetchCartProducts();
  }, []);

  return (
    <div>
      <h2>Cart Products</h2>
      <ul>
        {cartProducts.map((product) => (
          <li key={product._id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCart;
