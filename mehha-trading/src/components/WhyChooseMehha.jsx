import React, { useEffect, useRef } from "react";
import "./WhyChooseMehha.css";

const WhyChooseMehha = () => {
  const cardsRef = useRef([]);

  const values = [
    {
      title: "Established Since 2017",
      desc: "Nearly a decade importing chemical raw materials — PVC resin and DOP — for Ethiopian manufacturers, with a track record customers can rely on."
    },
    {
      title: "Integrity & Transparency",
      desc: "Accurate documentation, fair pricing and honest communication with every supplier and customer — no shortcuts, no surprises."
    },
    {
      title: "Trusted Global Suppliers",
      desc: "We work directly with certified manufacturers in China and South Korea to keep our import supply consistent and quality-checked."
    },
    {
      title: "Growing Beyond Imports",
      desc: "Building on our import foundation, we're now developing export channels for Ethiopian oilseeds and pulses to international markets."
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
          An established import partner for Ethiopian industry, now growing into agricultural exports.
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