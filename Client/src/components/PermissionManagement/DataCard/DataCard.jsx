import { useState } from 'react';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import './DataCard.scss'
import Popup from '../updatePopup/Popup';

const DataCard = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const { isDarkMode } = useDarkMode();

    const updateBtn = () => {
        console.log('Update Button Clicked');
        handleShow();
    }

    const deleteBtn = () => {
        console.log('Delete Button Clicked');
    }  

  return (
    <div className="datacard-outer" data-theme={isDarkMode ? 'dark' : 'light'}>
        <Popup showModal={showModal} handleClose={handleClose} />
        
        <div className="datacard-inner">
            <div className="top-row">
                <div className="username">
                    <h3>{props.username}</h3>
                </div>
                <div className="password">
                    <h3>{props.password}</h3>
                </div>
                <div className="expir-data">
                    <h3>{props.expir_date}</h3>
                </div>
                <div className="role">
                    <h3>{props.user_role}</h3>
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