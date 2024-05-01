import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddRolePopup.scss';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import axios from 'axios';

const AddRolePopup = ({ showModal, handleClose , onRecordAdded }) => {
  const { isDarkMode } = useDarkMode(); 

  // State variables for form fields and success message
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

  const handleSave = () => {
    const data = {
      email,
      username,
      password,
      role,
      validTime
    };
  
    axios.post('http://localhost:3000/api/v1/permission/create', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('API response:', response.data);
        
        // Show toast notification
        toast.success('Record saved successfully.', {
          position: 'top-right'
        });

        // Close the modal after 2 seconds
        setTimeout(() => {
          handleClose();
          onRecordAdded ();
        }, 2000);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size='lg' centered data-theme={isDarkMode ? 'dark' : 'light'}>
        <Modal.Header closeButton>
          <Modal.Title>Add A USER ROLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='email' value={email} onChange={handleEmailChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder='username' value={username} onChange={handleUsernameChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='password' value={password} onChange={handlePasswordChange}  required/>
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
            </form>
          </div>
        </Modal.Body>

        <Modal.Footer className='footer'>
          <button className='closeBtn' onClick={handleClose}>
            Close
          </button>
          <button className='SaveBtn' onClick={handleSave}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default AddRolePopup;
