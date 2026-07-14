import React from "react";
import "./TextSlider.css";

export default function TextSlider() {
  const items = [
    "MEHHA",
    "PVC Resin Imports",
    "DOP & Plasticizers",
    "Chemical Raw Materials",
    "Ethiopian Agri-Exports",
    "Trusted Since 2017",
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