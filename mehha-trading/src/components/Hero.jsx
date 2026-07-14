import React from "react";
import "./hero.css";
import heroBg from "../assets/hero-image-2025-26-enterance.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-left-content">
          <span className="hero-eyebrow">Since 2017 · Addis Ababa, Ethiopia</span>
          <h1>Unity in Every Step.</h1>
          <p>
            Let's Make a Difference. Together.
          </p>
          <div className="hero-btn-group">
            <a href="/imports">
              <button className="hero-btn">Our Imports</button>
            </a>
            <a href="/exports">
              <button className="hero-btn hero-btn-outline">Our Exports</button>
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero-right"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
    </section>
  );
};

export default Hero;
