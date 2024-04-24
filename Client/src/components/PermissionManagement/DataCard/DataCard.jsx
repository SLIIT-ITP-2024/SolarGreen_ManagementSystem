import { useState } from 'react';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import './DataCard.scss'
import Popup from '../updatePopup/Popup';
import axios from 'axios';

const DataCard = ({
    id,
    username,
    email,
    password,
    role,
    validTime,
    onRecordAdded
}) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const { isDarkMode } = useDarkMode();

    const updateBtn = () => {
        console.log('Update Button Clicked');
        handleShow();
    }

    const deleteBtn = () => {
        let confirmDelete = window.confirm('Are you sure you want to delete this record?');
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/api/v1/permission/delete/${id}`)
            .then(response => {
                console.log(response);
                onRecordAdded();
            })
            .catch(error => {
                console.error('Error deleting record:', error);
            });

        }  
    }

  return (
    <div className="datacard-outer" data-theme={isDarkMode ? 'dark' : 'light'}>
        <Popup 
        userId = {id}
        email={email} 
        username={username} 
        role={role} 
        validTime={validTime}
        onRecordAdded={onRecordAdded}

        showModal={showModal} handleClose={handleClose} />
        
        <div className="datacard-inner">
            <div className="top-row">
                <div className="username">
                    <h3>{username}</h3>
                </div>
                <div className="password">
                    <h3>{email}</h3>
                </div>
                <div className="expir-data">
                    <h3>{validTime}</h3>
                </div>
                <div className="role">
                    <h3>{role}</h3>
                </div>
            </div>
            <div className="bottom-row">
                <button className="update-btn" onClick={updateBtn}>Update</button>
                <button className="delete-btn" onClick={deleteBtn}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DataCard;