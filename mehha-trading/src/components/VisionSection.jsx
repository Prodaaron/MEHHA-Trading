import React from 'react';
import secImage from '../assets/Ai-mission-1.png'; 
import './vsec.css'
import exp from '../assets/freight-svgrepo-com.svg';
import imp from '../assets/freight-port-svgrepo-com.svg';
import manu from '../assets/factory-svgrepo-com.svg';
const VisionSection = () => {
  return (
    <div className='vsec-container'>
      <h1>Our Vision</h1>  
      <hr />
      <div>
        <div className="vsec-image-container">
            <img className='vsec-img' src={secImage} alt="" />
        </div>

        <div className="vsec-content-container">
            <p>To become a leading trusted Ethiopian trading company recognized globally for excellence in:</p>

            <div className='vsec-list'>
                <div>
                    <img src={exp} alt="" />
                    <p>Export</p>
                </div>
                <div>
                    <img src={imp} alt="" />
                    <p>Import</p>
                </div>
                <div>
                    <img src={manu} alt="" />
                    <p>Manufacturing</p>
                </div>
            </div>

            <p> while driving economic growth and prosperity.</p>
        </div>
      </div>
    </div>
  )
}

export default VisionSection;
