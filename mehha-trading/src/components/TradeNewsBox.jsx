import React, { useEffect, useState } from "react";
import "./TradeNewsBox.css";

const API_KEY = "pub_bc0deb1fcba5400eb3df305ffd5b8b6b"; // <-- replace with your NewsData.io or NewsAPI key
const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=trade,export,import,WTO,tariff,customs&language=en&category=business`;

const TradeNewsBox = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setNews(data.results.slice(0, 10)); // show top 10 headlines
        }
      })
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  return (
    <div className="trade-news-box">
      <h2>🌍 World Trade Highlights</h2>
      <div className="news-list">
        {news.length > 0 ? (
          news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-item"
            >
              <h4>{item.title}</h4>
              <p>{item.description?.slice(0, 100)}...</p>
            </a>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default TradeNewsBox;