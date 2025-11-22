import React from "react";
import "./Hero.css";
import heroBg from "../assets/hero-image-2025-26-enterance.png"; // Replace with your actual background image
import logo from "../assets/logo.png"; // Your MEHHA logo

const Hero = () => {
  return (
    <section
      className="hero"
      
    >
      <div className="hero-left">
        {/* <img src={logo} alt="MEHHA Trading PLC" className="hero-logo" /> */}
        <div className="hero-left-content">
          <h1>Unity in Every Step.</h1>
          <p>Working to make companies worldwide part of our family.</p>
          <a href="/exports">
            <button className="hero-btn">Learn More</button>
          </a>
        </div>
      </div>

      <div 
        className="hero-right"
        style={{ backgroundImage: `url(${heroBg})` }}
        >

      </div>
    </section>
  );
};

export default Hero;
