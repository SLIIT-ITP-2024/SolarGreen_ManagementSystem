import React from 'react'
import WithLayout from '../../hoc/WithLayout'

import './RegisterPage.scss'
import { useDarkMode } from '../../contexts/DarkModeContext';
import Header from '../../components/_Shared/Header';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div>
        <div className='reg-outer' data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <div className='reg-inner' > 
          <div className="title">
            <h1>LOGIN</h1>
          </div>
        
        <div className="form">
          <form>
          

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder='username'/>
              </div>

              

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='password'/>
              </div>

              
              <div className="form-group">
                <button type="submit">LOGIN</button>
              </div>

              <div className="form-group">
                <p>I don't have an account 
                  <Link to="/register"> Register</Link>
                </p>
              </div>

              </form>
        </div>
        </div>
    </div>

    </div>
  )
}

export default LoginPage
