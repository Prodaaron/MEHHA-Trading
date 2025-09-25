import React from 'react';
import './listing.css';
import sesameSeedImg from '../assets/sesame-seed-img.png';

const listingSec = () => {
  return (
    <div className='listing'>
      <img className='listing-img' src={sesameSeedImg} alt="" />
      <div className='listing-right'>
        <div className='listing-content'>
            <h1>Our Listings are Up!</h1>
            <p>View our product listings available for export including sesame seeds, soybeans and niger seeds.</p>

            <a href="/exports#products">
                <button>View</button>
            </a>
        </div>
      </div>
      
    </div>
  )
}

export default listingSec