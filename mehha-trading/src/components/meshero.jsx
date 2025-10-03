import React from 'react';
import './meshero.css';


import meshero from '../assets/pvc-bg.png';

const mesHeroSection = () => {
  return (
    <div className='meshero' style={{backgroundImage: `url(${meshero})`}}>
      <div className="meshero-content">
        <img className='hero-logo' src="./mes-arg-plast.png" alt="" />

        <h2>More Than Shoes. More Than Materials. <br /> A Legacy of Quality.</h2>
        <p>Proudly serving Ethiopia for 15 years with locally made PVC shoes and raw materials.</p>
      </div>
    </div>
  )
}

export default mesHeroSection;
