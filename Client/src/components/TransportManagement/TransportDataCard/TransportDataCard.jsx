import { useState } from 'react';
import './TransportDataCard.scss';
import axios from 'axios';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import UpdatePopup from '../popus/UpdataPopup';

const TransportDataCard = ({
    id,
    transportID,
    vehicleNumber,
    address,
    transportStatus,
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
            axios.delete(`http://localhost:3000/api/v1/transport/delete/${id}`)
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
       <UpdatePopup
            showModal={showModal}
            handleClose={handleClose}
            id={id}
            vehicleNumber={vehicleNumber}
            address={address}
            transportStatus={transportStatus}
            onRecordAdded={onRecordAdded}
        />
        
        <div className="datacard-inner">
            <div className="top-row">
                <div className="username">
                    <h3>{transportID}</h3>
                </div>
                <div className="password">
                    <h3>{vehicleNumber}</h3>
                </div>
                <div className="expir-data">
                    <h3>{address}</h3>
                </div>
                <div className="role">
                    <h3>{transportStatus}</h3>
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

export default TransportDataCard;