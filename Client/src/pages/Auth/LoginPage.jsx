import React, { useState, useEffect } from 'react';
import './RegisterPage.scss';
import { useDarkMode } from '../../contexts/DarkModeContext';
import Header from '../../components/_Shared/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const { isDarkMode } = useDarkMode();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [ipAddress, setClientIp] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      ipAddress,
    };

    console.log(data);
    axios.post('http://localhost:3000/api/v1/auth/login', data)
    .then((response) => {
        console.log('API response:', response.data);
        if (response.status === 200) {
            // Save username, role, and token to local storage
            localStorage.setItem('username', response.data.user.username);
            localStorage.setItem('role', response.data.user.role);
            localStorage.setItem('token', response.data.token);

            window.location.href = '/'; // Redirect to home page after successful login
        } else {
            alert('Unknown error occurred');
            }
        
    })
    .catch((error) => {
        console.error('API error:', error);
        if (error.response && error.response.status === 401) {
      
          if (error.response.data.message === 'Invalid login credentials') {
            alert('Invalid email. Please try again!');
        } else if (error.response.data.message === 'Invalid password') {
            alert('Invalid password. Please try again!');
        } else {
            alert('Unknown error: ' + response.data.message);
        }


            // If login failed due to unauthorized access, save the login attempt
            axios.post('http://localhost:3000/api/v1/login-attempts/save', data)
                .then((response) => {
                    console.log('API response:', response.data);
                    if (response.status === 201) {
                        console.log('Login attempts saved successfully');
                    } else {
                        setError('Save failed. Please try again.');
                    }
                })
                .catch((error) => {
                    console.error('API error:', error);
                    setError('Save failed. Please try again.');
                });
        } else {
            setError('Login failed. Please try again.');
        }
    });

  };

  // Fetch IP address on component mount
  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setClientIp(data.ip);
        console.log('Client IP address:', data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    getIpAddress();
  }, []);

  return (
    <div>
      <div className='reg-outer' data-theme={isDarkMode ? 'dark' : 'light'}>
        <Header />
        <div className='reg-inner'>
          <div className="title">
            <h1>LOGIN</h1>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder='email'
                  onChange={handleEmailChange}
                  value={email}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder='password'
                  onChange={handlePasswordChange}
                  value={password}
                  required
                />
              </div>

              <div className="form-group">
                <button type="submit">LOGIN</button>
              </div>

              <div className="form-group">
                <p>
                  I don't have an account{' '}
                  <Link to="/register">Register</Link>
                </p>
              </div>

              {/* Display error message if exists */}
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
