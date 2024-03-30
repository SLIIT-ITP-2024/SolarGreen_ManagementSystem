import React, { useState } from 'react';
import './ChartOne.scss';
import Toggle from './Toggle';

const ChartOne = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Update the state of isDarkMode to its opposite value
    setDarkMode(prevMode => !prevMode);
    console.log(isDarkMode);
  };

  return (
    <div>
      <div className="my-div" data-theme={isDarkMode ? 'dark' : 'light'}></div>
      <Toggle handleChange={toggleDarkMode} />
    </div>
  );
};

export default ChartOne;
