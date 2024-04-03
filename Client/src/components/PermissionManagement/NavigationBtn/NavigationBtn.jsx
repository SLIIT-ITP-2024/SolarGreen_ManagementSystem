import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import './NavigationBtn.scss'
const NavigationBtn = () => {
  return (
    <div className='navBtn-outer'>
        <h3>Attempts</h3>
        <IoMdArrowDropright className='icon'/>
    </div>
  )
}

export default NavigationBtn
