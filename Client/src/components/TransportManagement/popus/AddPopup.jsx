import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './AddPopup.scss';  
import { useDarkMode } from '../../../contexts/DarkModeContext';
const AddPopup = ({ showModal, handleClose , onRecordAdded }) => {
  const { isDarkMode } = useDarkMode(); 

  // State variables for form fields and success message
  const [TransportID, setTransportID] = useState('');
  const [vehicleNumber, setTransportType] = useState('');
  const [address, setTransportName] = useState('');
  const [transportStatus, setTransportStatus] = useState('Available');

  const handleTransportIDChange = (e) => {
    setTransportID(e.target.value);
  };

  const handletransportTypeChange = (e) => {
    setTransportType(e.target.value);
  };

  const handletransportNameChange = (e) => {
    setTransportName(e.target.value);
  };

  const handletransportStatusChange = (e) => {
    setTransportStatus(e.target.value);
  };


  const handleSave = () => {
    const data = {
        transportID:TransportID,
        vehicleNumber: vehicleNumber,
        address: address,
        transportStatus:transportStatus
    };
  console.log('Form submit data:', data);
    axios.post('http://localhost:3000/api/v1/transport/create',data)
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
          <Modal.Title>Add New Transport</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <form>
              <div className="form-group">
                <label htmlFor="email">TransportID</label>
                <input type="text" name="TransportID" id="TransportID" placeholder='transportId' value={TransportID} onChange={handleTransportIDChange} />
              </div>

              <div className="form-group">
                <label htmlFor="vehicleNumber">Vehicle Number</label>
                <input type="text" name="vehicleNumber" id="vehicleNumber" placeholder='Vehicle Number' value={vehicleNumber} onChange={handletransportTypeChange} />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" placeholder='Address' value={address} onChange={handletransportNameChange} />
              </div>

              <div className="form-group">
                <label htmlFor="transportStatus">Transport Status</label>
                <select name="transportStatus" id="transportStatus" value={transportStatus} onChange={handletransportStatusChange}>
                  <option value="Available">Available</option>
                  <option value="Complete">Complete</option>
                  <option value="Ongoing">Ongoing</option>
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

export default AddPopup;
