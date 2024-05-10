import React from 'react'
import "./projectOverview.scss";
import { useDarkMode } from '../../../contexts/DarkModeContext';
const ProjectOverview = () => {
    const { isDarkMode} = useDarkMode();
  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}
    className='overview-outer shadow-sm'>
        <div className="inner">
            <div className="top">
                <h3>Latest projects</h3>
                <p>Overview of latest month</p>
            </div>
            <div className="bottom-table">
                <div className="row-one">
                    <li>Project</li>
                    <li>Type</li>
                    <li>Customer</li>
                    <li>Cost</li>
                    <li>Revenue</li>
                </div>
                <hr className='hr-1' />
                <div className="row-one">
                    <p>A2-Solar</p>
                    <p>Green</p>
                    <p>Mash</p>
                    <p>$600.0</p>
                    <p>$256.60</p>
                </div>
                <hr className='dot-line'/>
                <div className="row-one">
                    <p>A2-Solar</p>
                    <p>Green</p>
                    <p>Mash</p>
                    <p>$600.0</p>
                    <p>$256.60</p>
                </div>
                <hr className='dot-line' />
                <div className="row-one">
                    <p>A2-Solar</p>
                    <p>Green</p>
                    <p>Mash</p>
                    <p>$600.0</p>
                    <p>$256.60</p>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ProjectOverview
