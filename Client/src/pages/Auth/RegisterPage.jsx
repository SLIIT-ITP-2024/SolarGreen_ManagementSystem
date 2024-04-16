import React, { useState } from 'react';
import Header from '../../components/_Shared/Header';
import './RegisterPage.scss';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const RegisterPage = () => {
  const { isDarkMode } = useDarkMode();

  // State variables for form fields
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [validTime, setTime] = useState('one-day');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      username,
      password,
      role,
      validTime
    };

    axios.post('http://localhost:3000/api/v1/permission/create', data)
      .then(response => {
        console.log('API response:', response.data);
    
      })
      .catch(error => {
        console.error('API error:', error);
    
      });
  };

  return (
    <div className='reg-outer' data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <div className='reg-inner'>
        <div className="title">
          <h1>REGISTER</h1>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='email' value={email} onChange={handleEmailChange} />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder='username' value={username} onChange={handleUsernameChange} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder='password' value={password} onChange={handlePasswordChange} />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select name="role" id="role" value={role} onChange={handleRoleChange}>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Data Entry">Data enter</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="time">Valid Time</label>
              <select name="time" id="time" value={validTime} onChange={handleTimeChange}>
                <option value="one-day">one day</option>
                <option value="one week">one week</option>
                <option value="for month">for month</option>
                <option value="for year">for year</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit">SUBMIT</button>
            </div>

            <div className="form-group">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
