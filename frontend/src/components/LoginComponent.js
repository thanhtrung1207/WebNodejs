import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'; // Import file CSS

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [signupInfo, setSignupInfo] = useState({ username: '', email: '', password: '' });
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up info:', signupInfo);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login', loginInfo);
      const { data } = response;

      if (data.success) {
        setMessage('Login successful');
        // Handle storing token and redirecting user here
        // For example, you can store the token in local storage
        localStorage.setItem('token', data.data);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />
      <div className="signup">
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            name="username"
            placeholder="User name"
            required
            value={signupInfo.username}
            onChange={handleSignupChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={signupInfo.email}
            onChange={handleSignupChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={signupInfo.password}
            onChange={handleSignupChange}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="login">
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={loginInfo.email}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={loginInfo.password}
            onChange={handleLoginChange}
          />
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
