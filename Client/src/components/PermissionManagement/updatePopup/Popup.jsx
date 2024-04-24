
import Modal from 'react-bootstrap/Modal';
import './Popup.scss';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import { useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Popup = ({ showModal, handleClose , userId,
   email,username, role, validTime, onRecordAdded}) => {
    const { isDarkMode } = useDarkMode(); 

    const [_email, setEmail] = useState('');
    const [_username, setUsername] = useState('');
    const [_role, setRole] = useState('');
    const [_validTime, setValidTime] = useState('');
    const[_userId,setUserId] = useState('');

    useEffect(() => {
      setEmail(email);
      setUsername(username);
      setRole(role);
      setValidTime(validTime);
      setUserId(userId);
  }, [email, username, role, validTime, userId]);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSave = () => {
    const data = {
      email: _email,
      username: _username,
      role: _role,
      validTime: _validTime
    };
  
    console.log('Form submit data:', data); // Log the form submit data
  
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `${token}`;
    }
  
    axios.put(`http://localhost:3000/api/v1/permission/update/${_userId}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('API response:', response.data);
        
       
        // Close the modal after 2 seconds
        setTimeout(() => {
          handleClose();
          onRecordAdded();
        }, 1000);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size='lg' centered 
      data-theme={isDarkMode ? 'dark' : 'light'} >
        <Modal.Header closeButton>
          <Modal.Title>UPDATE USER ROLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form">
          <form 
          onSubmit={handleSave}
          >
          <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='email'value={_email}
                onChange={handleEmailChange}
                />
              </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder='username'
              value={_username}
              onChange={handleUsernameChange}
              />
              </div>

              <div className="form-group">
                <label htmlFor="role" >Role</label>
                <select name="role" id="role" value={_role} onChange={handleRoleChange}>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Data Entry">Data enter</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="time" >Valid Time</label>
                <select name="time" id="time" value={_validTime} 
                onChange={handleTimeChange}
                >
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

     
    </>
  );
};

export default Popup;