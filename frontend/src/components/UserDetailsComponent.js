import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './detailuser.css'; // Import file CSS cho giao diện chi tiết người dùng

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user-details', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data);
      } catch (err) {
        setError('Có lỗi xảy ra khi tải thông tin người dùng.');
      }
    };

    fetchUserDetails();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <h1>Chi tiết người dùng</h1>
      <p><strong>Tên người dùng:</strong> {userDetails.username}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>
      {/* Thêm các thông tin khác về người dùng tại đây */}
    </div>
  );
};

export default UserDetails;
