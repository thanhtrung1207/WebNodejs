import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetCategoryProduct = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get('/api/get-categoryProduct');
        setCategoryProducts(response.data);
      } catch (error) {
        console.error('Đã xảy ra lỗi khi tìm nạp sản phẩm danh mục:', error);
      }
    };

    fetchCategoryProducts();
  }, []);

  return (
    <div>
      <h2>Category Products</h2>
      <ul>
        {categoryProducts.map((product) => (
          <li key={product._id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetCategoryProduct;
