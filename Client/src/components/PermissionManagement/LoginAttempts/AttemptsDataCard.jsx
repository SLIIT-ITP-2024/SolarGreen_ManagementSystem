import React from 'react'
import { useDarkMode } from '../../../contexts/DarkModeContext';

import './AttemptsDataCard.scss';

const AttemptsDataCard = (props) => {
    const { isDarkMode } = useDarkMode();
  return (
    <>
        <div className="AttemptsDataCard-outer" data-theme={isDarkMode ? 'dark' : 'light'}>
        <div className="AttemptsDataCard-inner">
            <div className="AttemptsDataCard-top-row shadow-sm">
                <div className="username">
                    <h3>{props.username}</h3>
                </div>
                <div className="password">
                    <h3>{props.password}</h3>
                </div>
                <div className="expir-data">
                    <h3>{props.ip}</h3>
                </div>
                <div className="role">
                    <h3>{props.dateAndTime}</h3>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default AttemptsDataCard
