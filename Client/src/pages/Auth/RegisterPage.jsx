import React from 'react'
import WithLayout from '../../hoc'
import Header from '../../components/_Shared/Header'

import './RegisterPage.scss'
import { useDarkMode } from '../../contexts/DarkModeContext'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='reg-outer' data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <div className='reg-inner' > 
          <div className="title">
            <h1>REGISTER</h1>
          </div>
        
        <div className="form">
          <form>
          <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='email'/>
              </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder='username'/>
              </div>

              

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='password'/>
              </div>

              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select name="role" id="role">
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Data Entry">Data enter</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="time">Valid Time</label>
                <select name="time" id="time">
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
                <p>Already have an account? 
                  <Link to="/login"> Login</Link>
                   </p>
              </div>

              </form>
        </div>
        </div>
    </div>
  )
}
export default RegisterPage
