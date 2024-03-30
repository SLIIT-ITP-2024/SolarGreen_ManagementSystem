import React, { useState } from 'react';
import "./Header.scss";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <div className={`header-outer ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="header-inner">
          <div className="content">
            <div className="logo">
              <img src="images/logo.png" alt="logo" />
            </div>
            <div className="title">
              <h1>SOLA GREEN</h1>
            </div>
          </div>
          <div className="mode-btn" onClick={toggleDarkMode}>
            <div className="btn-outer">
              <div className="btn-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
