import React from 'react'
import './ReportPopup.scss';
import { Modal } from 'react-bootstrap';
import { useDarkMode } from '../../../contexts/DarkModeContext';

const ReportPopup = ({showModal, handleClose}) => {
    const { isDarkMode } = useDarkMode();

  return (
    <>
    <Modal show={showModal} onHide={handleClose} size='lg' centered 
    data-theme={isDarkMode ? 'dark' : 'light'} >
      <Modal.Header closeButton>
        <Modal.Title>GENERATE A REPORT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="form">
        <form>
            <div className="form-group">
              <label htmlFor="time">Time Period</label>
              <select name="time" id="time">
                <option value="Last_month">Last Month</option>
                <option value="Last_3months">Last 3 Months</option>
                <option value="last_6months">Last 6 Months</option>
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
          Generate
        </button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ReportPopup
