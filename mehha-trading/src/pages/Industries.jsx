import React from 'react';
import UnderConstruction from '../components/UnderConstruction';
import ShuffleSlider from "../components/ShuffleSlider";
import TreadmillSlider from "../components/TreadmillSlider";
import './Industries.css';
import MesStatsSection from '../components/MesStatsSection';
import PvcSection from '../components/pvcSection';
import Meshero from '../components/meshero';
import PvcRawSection from '../components/pvcRawSection';

const images = [
  "./rawslide.jpg", "./rawslide (1).jpg", "./rawslide (2).jpg", "./rawslide (3).jpg",
  "./rawslide (4).jpg", "./rawslide (5).jpg", "./rawslide (6).jpg", "./rawslide (7).jpg", "./rawslide (8).jpg"
];

const Industries = () => {
  return (
    <div className='industries'>
      {/* <UnderConstruction /> */}
      
      <Meshero /> 
      <MesStatsSection />
      <PvcSection />
      <div className='slider-container'>
        <TreadmillSlider images={images} />
      </div>
      <PvcRawSection />
    </div>
  )
}

export default Industries;
