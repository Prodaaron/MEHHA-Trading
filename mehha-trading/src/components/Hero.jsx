import React from "react";
import "./Hero.css";
import heroBg from "../assets/oilseeds-farm.jpg"; // Replace with your actual background image
import logo from "../assets/logo.png"; // Your MEHHA logo

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <img src={logo} alt="MEHHA Trading PLC" className="hero-logo" />
        <h1>Exploring New Opportunities.</h1>
        <p>Diving into international trade in new ways.</p>
        <a href="/exports">
          <button className="hero-btn">Learn More</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
