import React from "react";
import "./TreadmillSlider.css";

const TreadmillSlider = ({ images, speed = 20 }) => {
  return (
    <div className="treadmill-slider">
      <div
        className="treadmill-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} className="treadmill-image" />
        ))}
      </div>
    </div>
  );
};

export default TreadmillSlider;