import React from 'react';
import secImage from '../assets/Ai-mission-2.png'; 
import './msec.css';
import msecImage from '../assets/target-svgrepo-com.svg'
import dev from '../assets/growth-report-graph-svgrepo-com.svg';
import pro from '../assets/give-heart.svg';
import prod from '../assets/give-gift-svgrepo-com.svg';

const MissionSection = () => {
  return (
    <div className='msec-container'>
      <h1>Our Mission</h1>  
      <hr />
      <div>
        

        <div className="msec-content-container">
          <div>
            <img src={pro} alt="" />

            <p>To provide high quality agricultural products and industrial goods to international and local markets</p>
          </div>
          
          <div>
            <img src={prod} alt="" />

            <p>leveraging our diverse business expertise to create value for customers</p>
          </div>
          
          <div>
            <img src={dev} alt="" />
            <p>promote sustainable growth, and contribute to Ethiopia's economic development</p>
          </div>
        </div>

        <div className="msec-image-container">
            <img className='vsec-img' src={secImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MissionSection;