import React from 'react';
import './pvc.css';
import rawMaterial from '../assets/raw-material.jfif';

const pvcRawSection = () => {
  return (
    <div className='pvc-section' style={{backgroundImage: `url(${rawMaterial})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="content-card">
        <p>For over 5 years, Mes-Arg Plastic Shoe and Raw Material has been at the forefront of Ethiopia’s plastic manufacturing sector, producing PVC raw materials locally rather than relying on imports. This strategic shift has allowed us to play a vital role in supporting the country’s industrial growth while strengthening our own production capacity.</p>

        <p>
            Throughout these years, we have remained resilient and reliable, consistently supplying high-quality PVC raw materials to various industries that depend on them for their manufacturing processes. At the same time, we have successfully integrated these raw materials into our own production line, enabling us to manufacture durable and in-demand PVC shoes, boots, and flops.
        </p>

        <p>By manufacturing raw materials locally, we not only reduce dependency on imports but also contribute to affordability, sustainability, and the advancement of Ethiopia’s manufacturing sector. Our commitment to innovation, efficiency, and quality ensures that we continue to serve both our partners in industry and our customers with excellence.</p>
      </div>
    </div>
  )
}

export default pvcRawSection;
