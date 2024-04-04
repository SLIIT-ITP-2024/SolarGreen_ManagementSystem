
import { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import './AddRoleBtn.scss';
import AddRolePopup from '../addRolePopup/AddRolePopup';

const AddRoleBtn = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleClick = () => {
        handleShow();
    };

    return (
        <>
            <div className='navBtn-outer' onClick={handleClick}>
                <h3>{props.btnName}</h3>
                <IoMdArrowDropright className='icon'/>
                
            </div>

            <AddRolePopup showModal={showModal} handleClose={handleClose} />

        </>
    );
}
export default AddRoleBtn;
