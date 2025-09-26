import React from 'react'
import ShuffleSlider from "../components/ShuffleSlider";
import './ShuffleSection.css'

const images = [
  "./rawslide.jpg", "./rawslide (1).jpg", "./rawslide (2).jpg", "./rawslide (3).jpg",
  "./rawslide (4).jpg", "./rawslide (5).jpg", "./rawslide (6).jpg", "./rawslide (7).jpg", "./rawslide (8).jpg"
];

const ShuffleSection = () => {
  return (
    <div className='shuffle-container'>
      <ShuffleSlider images={images} />
      <div className='shuffle-content'>
        <h1>MES-ARG Plast <sub>&reg;</sub></h1>

        <h2>More Than Shoes. More Than Materials. <br /> A Legacy of Quality.</h2>
        <p>Proudly serving Ethiopia for 15 years with locally made PVC shoes and raw materials.</p>

        <a href="/mes-arg-plast">
            <button className='sc-btn'>Learn More</button>
        </a>
      </div>
    </div>
  )
}

export default ShuffleSection
