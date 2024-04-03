import React from 'react'
import { useDarkMode } from '../../../contexts/DarkModeContext';

const DataCard = (props) => {
    const { isDarkMode } = useDarkMode();
  return (
    <>
        <div className="datacard-outer" data-theme={isDarkMode ? 'dark' : 'light'}>
        <div className="datacard-inner">
            <div className="top-row">
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

export default DataCard
