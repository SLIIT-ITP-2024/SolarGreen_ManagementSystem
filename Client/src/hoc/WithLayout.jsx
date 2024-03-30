import React from 'react';
import Header from '../components/_Shared/Header';
import Menu from '../components/_Shared/Menu';
import './WithLayout.scss';
import { useDarkMode } from "../contexts/DarkModeContext";

const WithLayout = (WrappedComponent) => {
  const WithLayoutWrapper = () => {
    const { isDarkMode } = useDarkMode(); 

    return (
      <div>
        <Header />
        <Menu />
        <div className="main" data-theme={isDarkMode ? 'dark' : 'light'}>
          <WrappedComponent />
        </div>
      </div>
    );
  };

  return WithLayoutWrapper;
};

export default WithLayout;
