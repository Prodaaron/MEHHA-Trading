import React, { useEffect, useRef, useState } from 'react';
import './goal.css';
import goalBg from '../assets/environment-target.png';

const Goal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (goalRef.current) {
      observer.observe(goalRef.current);
    }

    return () => {
      if (goalRef.current) observer.unobserve(goalRef.current);
    };
  }, []);

  return (
    <div ref={goalRef} className={`goal ${isVisible ? 'show' : ''}`}>
      <header>
        <h1>Our Goal</h1>
        <hr />
      </header>

      <div className="goal-content">
        <img className="gc-bg" src={goalBg} alt="" />
        <h2 className="goal-title">Making a Difference.</h2>
        <p className="goal-subtitle">
          Taking part in making a difference as a group, as a family.
        </p>
      </div>
    </div>
  );
};

export default Goal;