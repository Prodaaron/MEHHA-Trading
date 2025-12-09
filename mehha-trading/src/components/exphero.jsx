import React from "react";
import "./expHero.css";
import heroBg from "../assets/hero-image-2025-26-enterance-export-page.png"; // Replace with your actual background image
import logo from "../assets/Logo.png"; // Your MEHHA logo

const expHero = () => {
  return (
    <section
      className="exphero"
    >
      <div className="exphero-overlay">
        {/* <img src={logo} alt="MEHHA Trading PLC" className="hero-logo" /> */}
        <h1>Humera Gonder Sesame.</h1>
        <p>Better Tahini. Better Oil. Better Life.</p>
      </div>

      <img src={heroBg} alt="" className="exp-hero-img" />
    </section>
  );
};

export default expHero;
