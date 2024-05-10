
import { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import './AddNewBtn.scss';
import AddPopup from '../popus/AddPopup';


const AddNewBtn = ({ btnName, onRecordAdded }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleClick = () => {
        handleShow();
    };

    return (
        <>
            <div className='navBtn-outer' onClick={handleClick}>
                <h3>{btnName}</h3>
                <IoMdArrowDropright className='icon'/>
                
            </div>

            <AddPopup showModal={showModal} handleClose={handleClose} onRecordAdded={onRecordAdded}  />
           

        </>
    );
}
export default AddNewBtn;
