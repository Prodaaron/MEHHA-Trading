import React, { useState, useEffect } from "react";
import "./ShuffleSlider.css";

const ShuffleSlider = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="shuffle-slider">
      {images.map((img, index) => {
        let position = (index - activeIndex + images.length) % images.length;
        return (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`shuffle-image position-${position}`}
          />
        );
      })}
    </div>
  );
};

export default ShuffleSlider;