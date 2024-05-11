import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './SendingEmailBtn.scss'
const SendingEmailBtn = (props) => {
  return (
    <>
    <div className='sending-email'>
        <Link to="/permission-management/sending-email" className="navBtn-link">
          <h3>{props.btnName}</h3>
          <IoMdArrowDropright className='icon'/>
        </Link>
    </div>

    </>
  )
}

export default SendingEmailBtn
