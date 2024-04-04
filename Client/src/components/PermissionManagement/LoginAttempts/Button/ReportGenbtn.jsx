import React from 'react'
import ReportPopup from '../../GenerateReport_Popup/ReportPopup'
import { IoMdArrowDropright } from 'react-icons/io';
import './ReportGenbtn.scss';

const ReportGenbtn = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
  return (
    <>
            <div className='navBtn-outer' onClick={handleClick}>
                <h3>{props.btnName}</h3>
                <IoMdArrowDropright className='icon'/>
                
            </div>

            <ReportPopup showModal={showModal} handleClose={handleClose} />

        </>
  )
}

export default ReportGenbtn
