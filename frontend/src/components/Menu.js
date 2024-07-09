import React from 'react';
import { Link } from 'react-router-dom';

function MenuComponent() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/user-details">User Details</Link></li>
        <li><Link to="/user-logout">User Logout</Link></li>
        <li><Link to="/all-users">All Users</Link></li>
        <li><Link to="/get-product">Get Product</Link></li>
        <li><Link to="/get-category-product">Get Category Product</Link></li>
        <li><Link to="/get-category-wise-product">Get Category Wise Product</Link></li>
        <li><Link to="/view-cart">View Cart</Link></li>
        <li><Link to="/search-product">Search Product</Link></li>
      </ul>
    </nav>
  );
}

export default MenuComponent;
