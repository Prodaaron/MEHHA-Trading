import React from 'react';
import './pvc.css';
import rawMaterial from '../assets/raw-material.jfif';
import pvcShoes from '../assets/combined_landscape.jpg'

const pvcSection = () => {
  return (
    <div className='pvc-section' style={{backgroundImage: `url(${pvcShoes})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="content-card">
        <p>For more than 15 years, Mes-Arg Plastic Shoe and Raw Material has been a trusted name in Ethiopia’s footwear industry. We specialize in the production of high-quality, durable, and in-demand PVC shoes, boots, and flops, meeting the needs of diverse customers across the country.</p>

        <p>
            Our company has established a strong distribution network, with a primary focus on the northern countryside of Ethiopia, where we supply wholesalers and retailers with products that combine both affordability and long-lasting quality. Beyond regional distribution, we also operate a retail outlet in Addis Ababa’s Merkato market, one of the busiest commercial hubs in the country, ensuring accessibility for local consumers.
        </p>

        <p>With nearly two decades of industry experience, Mes-Arg Plastic Shoe and Raw Material is committed to maintaining high production standards, expanding our reach, and consistently delivering products that meet the evolving demands of the Ethiopian market.</p>
      </div>
    </div>
  )
}

export default pvcSection;
