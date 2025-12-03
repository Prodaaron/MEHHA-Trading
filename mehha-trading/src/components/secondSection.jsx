import React from "react";
import "./SecondSection.css";
import productImg from "../assets/sesame-seed-img.png"; // update path as needed

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="second-container">
        
        <div className="second-image">
          <img src={productImg} alt="Export Products" />
        </div>

        <div className="second-content">
          <h2>Our Listings Are Live</h2>
          <p>
            Explore our export-ready agricultural products including premium
            sesame seeds, soybean, and niger seeds — sourced directly from
            trusted Ethiopian suppliers.
          </p>

          <a className="second-link" href="/exports#products">
            View Listings <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SecondSection;