
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './UpdatePopup.scss';
import { useDarkMode } from '../../../contexts/DarkModeContext';

const UpdatePopup = ({ showModal, handleClose , id,
    vehicleNumber,address, transportStatus, onRecordAdded}) => {
    const { isDarkMode } = useDarkMode(); 

    const [_vehicleNumber, settransportType] = useState('');
    const [_address, settransportName] = useState('');
    const [_transportStatus, settransportStatus] = useState('');
    const[_id,setId] = useState('');

    useEffect(() => {
        settransportType(vehicleNumber);
        settransportName(address);
        settransportStatus(transportStatus);
        setId(id);
    }, [vehicleNumber, address, transportStatus, id]);

    const handletransportTypeChange = (e) => {
        settransportType(e.target.value);
    };

    const handletransportNameChange = (e) => {
        settransportName(e.target.value);
    };

    const handletransportStatusChange = (e) => {
        settransportStatus(e.target.value);
    };


  const handleSave = () => {
    const data = {
        vehicleNumber: _vehicleNumber,
        address: _address,
        transportStatus: _transportStatus
    };
  
    console.log('Form submit data:', data); 
  
    axios.put(`http://localhost:3000/api/v1/transport/update/${_id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('API response:', response.data);
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
              <label htmlFor="vehicleNumber">Vehicle Number</label>
              <input
                type="text"
                className="form-control"
                id="vehicleNumber"
                value={_vehicleNumber}
                onChange={handletransportTypeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={_address}
                onChange={handletransportNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="transportStatus">Status</label>
              <input
                type="text"
                className="form-control"
                id="transportStatus"
                value={_transportStatus}
                onChange={handletransportStatusChange}
              />
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

export default UpdatePopup;