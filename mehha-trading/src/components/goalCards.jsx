import React, { useState, useEffect, useRef } from 'react';
import './goalCards.css';

const cardsData = [
  { id: 1, title: "Sustainability", text: "We aim to protect the environment." },
  { id: 2, title: "Community", text: "Working together for a better future." },
  { id: 3, title: "Innovation", text: "Finding smarter, greener solutions." },
  { id: 4, title: "Education", text: "Spreading awareness and knowledge." },
  { id: 5, title: "Health", text: "Promoting wellbeing and safety." },
  { id: 6, title: "Equality", text: "Creating equal opportunities for all." },
  { id: 7, title: "Growth", text: "Encouraging personal and community growth." },
  { id: 8, title: "Future", text: "Investing in long-term positive change." },
];

const GoalCards = () => {
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const wrapperRef = useRef(null);

  const cardsPerPage = 4;
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const handleWheel = (e) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      // always block page scroll while in section
      e.preventDefault();

      if (e.deltaY > 0 && page < totalPages - 1) {
        setDirection("down");
        setIsAnimating(true);
        setTimeout(() => {
          setPage((prev) => prev + 1);
          setIsAnimating(false);
        }, 800);
      } else if (e.deltaY < 0 && page > 0) {
        setDirection("up");
        setIsAnimating(true);
        setTimeout(() => {
          setPage((prev) => prev - 1);
          setIsAnimating(false);
        }, 800);
      }
    };

    if (wrapper) {
      wrapper.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", handleWheel);
      }
    };
  }, [page, isAnimating]);

  const currentCards = cardsData.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <div ref={wrapperRef} className="goal-cards-wrapper">
      <div className={`goal-cards ${isAnimating ? `animating ${direction}` : ""}`}>
        <div className="row top-row">
          {currentCards.slice(0, 2).map((card) => (
            <div key={card.id} className="goal-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div className="row bottom-row">
          {currentCards.slice(2, 4).map((card) => (
            <div key={card.id} className="goal-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span key={i} className={i === page ? "dot active" : "dot"}></span>
        ))}
      </div>
    </div>
  );
};

export default GoalCards;