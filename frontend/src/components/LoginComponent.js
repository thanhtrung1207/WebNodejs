import React, { useState } from 'react';
import './login.css'; // Import CSS file
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [dataSignup, setDataSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setDataSignup((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataApi = await response.json();

      if (dataApi.success) {
        setMessage('Login successful!');
      } else {
        setMessage(dataApi.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataSignup)
      });

      const dataApi = await response.json();

      if (dataApi.success) {
        setMessage('User created successfully!');
      } else {
        setMessage(dataApi.message);
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
            name="name"
            placeholder="User name"
            required
            value={dataSignup.name}
            onChange={handleSignupChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={dataSignup.email}
            onChange={handleSignupChange}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={dataSignup.password}
            onChange={handleSignupChange}
          />
          <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}>
            <span>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
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
            value={data.email}
            onChange={handleLoginChange}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={data.password}
            onChange={handleLoginChange}
          />
          <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}>
            <span>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
