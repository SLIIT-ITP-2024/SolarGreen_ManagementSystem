import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import './NavigationBtn.scss';

const NavigationBtn = React.memo((props) => {
  
  const handleClick = () => {
    console.log(props.btnName);
    // Add your onClick logic here
  };

  return (
    <div className='navBtn-outer' onClick={handleClick}>
      <h3>{props.btnName}</h3>
      <IoMdArrowDropright className='icon'/>
    </div>
  );
});

export default NavigationBtn;
