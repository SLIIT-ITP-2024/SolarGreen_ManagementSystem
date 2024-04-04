import Modal from 'react-bootstrap/Modal';

import './AddRolePopup.scss';
import { useDarkMode } from '../../../contexts/DarkModeContext';
const AddRolePopup = ({ showModal, handleClose }) => {
    const { isDarkMode } = useDarkMode(); 
    
    return (
      <>
        <Modal show={showModal} onHide={handleClose} size='lg' centered 
        data-theme={isDarkMode ? 'dark' : 'light'} >
          <Modal.Header closeButton>
            <Modal.Title>Add A USER ROLE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </form>
          </div>
          </Modal.Body>
  
          <Modal.Footer className='footer'>
            <button className='closeBtn' onClick={handleClose}>
              Close
            </button>
            <button className='SaveBtn' onClick={handleClose}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddRolePopup
