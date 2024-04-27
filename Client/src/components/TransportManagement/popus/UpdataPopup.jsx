
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './UpdatePopup.scss';
import { useDarkMode } from '../../../contexts/DarkModeContext';

const UpdatePopup = ({ showModal, handleClose , id,
    transportType,transportName, transportStatus, onRecordAdded}) => {
    const { isDarkMode } = useDarkMode(); 

    const [_transportType, settransportType] = useState('');
    const [_transportName, settransportName] = useState('');
    const [_transportStatus, settransportStatus] = useState('');
    const[_id,setId] = useState('');

    useEffect(() => {
        settransportType(transportType);
        settransportName(transportName);
        settransportStatus(transportStatus);
        setId(id);
    }, [transportType, transportName, transportStatus, id]);

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
        transportType: _transportType,
        transportName: _transportName,
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
              <label htmlFor="transportType">Transport Type</label>
              <input
                type="text"
                className="form-control"
                id="transportType"
                value={_transportType}
                onChange={handletransportTypeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="transportName">Transport Name</label>
              <input
                type="text"
                className="form-control"
                id="transportName"
                value={_transportName}
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