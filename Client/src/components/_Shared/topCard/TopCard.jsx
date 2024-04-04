import React from 'react'
import { useDarkMode } from '../../../contexts/DarkModeContext';
import './TopCard.scss'
const TopCard = (props) => {
    const { isDarkMode} = useDarkMode();
  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}
    className='Topcard-outer shadow-md' >
        <div className="inner">
                <h3>{props.title}</h3>
                <p>{props.descr}</p>
        </div>
    </div>
  )
}

export default TopCard
