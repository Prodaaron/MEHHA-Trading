import React from 'react';
import secImage from '../assets/Ai-mission-1.png'; 
import './vsec.css'

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
            <p>"To provide high quality agricultural products and industrial goods to international and local markets, leveraging our diverse business expertise to create value for customers, promote sustainable growth, and contribute to Ethiopia's economic development"</p>
        </div>
      </div>
    </div>
  )
}

export default VisionSection;