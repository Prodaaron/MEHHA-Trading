import React, { useEffect, useRef } from "react";
import "./WhyChooseMehha.css";

const WhyChooseMehha = () => {
  const cardsRef = useRef([]);

  const values = [
    {
      title: "Unity Across the Supply Chain",
      desc: "We work closely with farmers, cooperatives and processors to maintain a consistent and reliable supply of premium oilseeds and pulses."
    },
    {
      title: "Integrity & Transparency",
      desc: "We provide accurate documentation, fair pricing and honest communication — no shortcuts, no surprises."
    },
    {
      title: "Quality Assurance",
      desc: "Every shipment goes through standardized cleaning, grading, and moisture control to meet international export requirements."
    },
    {
      title: "Reliable Delivery",
      desc: "From sourcing to logistics, we ensure every order arrives on time and matches the expected quality."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          } else {
            entry.target.classList.remove("card-visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-mehha">
      <div className="why-container">

        <h2 className="why-title">Why Choose MEHHA?</h2>
        <p className="why-sub">
          Exporting premium Ethiopian oilseeds & pulses with unity, integrity and international standards.
        </p>

        <div className="why-grid">
          {values.map((value, idx) => (
            <div
              className="why-card"
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMehha;