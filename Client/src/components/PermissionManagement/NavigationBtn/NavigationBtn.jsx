import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import './NavigationBtn.scss';
import { Link } from 'react-router-dom';

const NavigationBtn = React.memo((props) => {

  const handleClick = () => {
    window.location.href = '/login-attempts';
  };

  return (
    <div className='navBtn-outer' onClick={handleClick}>
      <h3>{props.btnName}</h3>
      <IoMdArrowDropright className='icon'/>
    </div>
  );
});

export default NavigationBtn;
