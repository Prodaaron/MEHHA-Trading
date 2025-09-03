import React from 'react';
import UnderConstruction from '../components/UnderConstruction';
import ShuffleSlider from "../components/ShuffleSlider";
import TreadmillSlider from "../components/TreadmillSlider";
import './Industries.css';
import MesStatsSection from '../components/MesStatsSection';

const images = [
  "./rawslide.jpg", "./rawslide (1).jpg", "./rawslide (2).jpg", "./rawslide (3).jpg",
  "./rawslide (4).jpg", "./rawslide (5).jpg", "./rawslide (6).jpg", "./rawslide (7).jpg", "./rawslide (8).jpg"
];

const Industries = () => {
  return (
    <div className='industries'>
      {/* <UnderConstruction /> */}

      <h2>Mes-Arg Plastic Shoe and Raw Material Factory</h2>
      <hr />
      <div className='slider-container'>
        <TreadmillSlider images={images} />
      </div>
       
      <MesStatsSection />
    </div>
  )
}

export default Industries
