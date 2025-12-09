import React from "react";
import "./TextSlider.css";

export default function TextSlider() {
  const items = [
    "MEHHA",
    "Premium Oilseeds",
    "High-Quality Pulses",
    "Global Export Standards",
    "Ethiopian Origin",
    "Trusted Supply Chain",
  ];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {items.concat(items).map((item, index) => (
          <span key={index} className="slider-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}