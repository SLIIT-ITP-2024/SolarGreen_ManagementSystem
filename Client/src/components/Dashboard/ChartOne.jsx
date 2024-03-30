import React, { useState } from 'react';
import './ChartOne.scss';

import { useDarkMode } from '../../contexts/DarkModeContext';

const ChartOne = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      <div className="my-div" data-theme={isDarkMode ? 'dark' : 'light'}></div>
      </div>
  );
};

export default ChartOne;
