import React from "react";
import "./Hero.css";
import heroBg from "../assets/Unity-bg.png"; // Replace with your actual background image
import logo from "../assets/logo.png"; // Your MEHHA logo

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <img src={logo} alt="MEHHA Trading PLC" className="hero-logo" />
        <h1>Unity in Every Step.</h1>
        <p>Working to make global companies part of our family.</p>
        <a href="/exports">
          <button className="hero-btn">Learn More</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
