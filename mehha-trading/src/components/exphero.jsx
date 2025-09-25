import React from "react";
import "./expHero.css";
import heroBg from "../assets/ethiopia-map.jpg"; // Replace with your actual background image
import logo from "../assets/logo.png"; // Your MEHHA logo

const expHero = () => {
  return (
    <section
      className="exphero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="exphero-overlay">
        <img src={logo} alt="MEHHA Trading PLC" className="hero-logo" />
        <h1>Uniting to Make the World a Better Place.</h1>
        <p>Building on our initial success, we now plan to expand into the export
        sector, focusing on oilseeds and pulses. Our company aims to supply high-quality products and become one of the best supplier and contribute to the global market. </p>
        
      </div>
    </section>
  );
};

export default expHero;
