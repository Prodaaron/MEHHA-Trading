import React, { useRef, useEffect, useState } from "react";
import "./cardScroller.css";

const cards = [
  { id: 1, title: "Become your Trusted Supplier" },
  { id: 2, title: "Provide One of The Finest Agricultural Products" },
  { id: 3, title: "Become One of the Top Leading Trading Companies" },
  { id: 4, title: "Hold a Firm Grip on Ethiopia's Agricultural Sector" },
  { id: 5, title: "Unite with Multiple Companies" },
  { id: 6, title: "Become Part of Making a Difference in the World" },
  { id: 7, title: "Become your companies best partner." },
  { id: 8, title: "Build A Strong Family " },
];

export default function CardScroller() {
  const wrapperRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="scroller-wrapper">
      <div className={`grid ${inView ? "in-view" : ""}`}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`card ${i % 2 === 0 ? "left" : "right"}`}
          >
            <h2 className="cardTitle">
              {card.title}
            </h2>
            
          </div>
        ))}
      </div>
    </div>
  );
}