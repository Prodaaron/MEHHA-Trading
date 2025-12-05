import React from 'react';
import secImage from '../assets/Ai-mission-1.png'; 
import './vsec.css';

import exp from '../assets/freight-svgrepo-com.svg';
import imp from '../assets/freight-port-svgrepo-com.svg';
import manu from '../assets/factory-svgrepo-com.svg';

const VisionSection = () => {
  return (
    <div className='vsec-container'>
      <h1>Our Vision</h1>  

      {/* Two-column layout */}
      <div className="vsec-inner">

        {/* LEFT — image */}
        <div className="vsec-image-container">
          <img className='vsec-img' src={secImage} alt="Vision Illustration" />
        </div>

        {/* RIGHT — content + cards */}
        <div className="vsec-content-container">
          <p className="vsec-intro">
            To become a leading trusted Ethiopian trading company recognized globally for excellence in:
          </p>

          <div className='vsec-list'>
            <div className="vsec-card">
              <img src={exp} alt="Export Icon" />
              <p>Export</p>
            </div>

            <div className="vsec-card">
              <img src={imp} alt="Import Icon" />
              <p>Import</p>
            </div>

            <div className="vsec-card">
              <img src={manu} alt="Manufacturing Icon" />
              <p>Manufacturing</p>
            </div>
          </div>

          <p className="vsec-outro">
            while driving economic growth and prosperity.
          </p>
        </div>
      </div>

    </div>
  )
}

export default VisionSection;