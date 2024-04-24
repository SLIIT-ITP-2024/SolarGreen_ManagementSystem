import React, { useState } from 'react';
import './RegisterPage.scss';
import { useDarkMode } from '../../contexts/DarkModeContext';
import Header from '../../components/_Shared/Header';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios

const LoginPage = () => {
  const { isDarkMode } = useDarkMode();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to handle error messages

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
      password
    };
    console.log(data)
    axios.post('http://localhost:3000/api/v1/auth/login', data)
      .then(response => {
        console.log('API response:', response.data);
        if (response.status === 200) {
            // Save username and token to local storage
          localStorage.setItem('username', response.data.user.username);
          localStorage.setItem('role', response.data.user.role);
          localStorage.setItem('token', response.data.token);
 
          window.location.href = '/';
        } else {
          setError('Login failed. Please try again Later.');
        }
      })
      .catch(error => {
        console.error('API error:', error);
        setError('Login failed. Please try again.');
      });
  };

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
                <input type="text" name="email" id="email" placeholder='email'
                  onChange={handleEmailChange} value={email} />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='password'
                  onChange={handlePasswordChange} value={password} />
              </div>
              
              <div className="form-group">
                <button type="submit">LOGIN</button>
              </div>

              <div className="form-group">
                <p>I don't have an account 
                  <Link to="/register"> Register</Link>
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
