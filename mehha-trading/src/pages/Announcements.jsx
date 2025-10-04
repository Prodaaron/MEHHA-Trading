import React from 'react';
import NewsSection1 from '../components/newsSection1';
import TradeNewsBox from "../components/TradeNewsBox.jsx";
import './Announcements.css';

const Announcements = () => {
  return (
    <div className='announcements'>
      <div className="newsArticle">
        <NewsSection1 />

        <div className='other-news'>
          <TradeNewsBox />
          <div className='listing-content on-listing'>
            <h1>Our Listings are Up!</h1>
            <p>View our product listings available for export including sesame seeds, soybeans and niger seeds.</p>

            <a href="/exports#products">
              <button>View</button>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Announcements
