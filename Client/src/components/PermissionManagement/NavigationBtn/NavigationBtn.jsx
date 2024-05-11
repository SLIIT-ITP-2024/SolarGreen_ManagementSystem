import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import './NavigationBtn.scss';
import { Link } from 'react-router-dom';

const NavigationBtn = React.memo((props) => {
  return (
    <div className='navBtn-outer'>
        <Link to="/permission-management/login-attempts" className="navBtn-link">
          <h3>{props.btnName}</h3>
          <IoMdArrowDropright className='icon'/>
        </Link>
    </div>
  );
});

export default NavigationBtn;
