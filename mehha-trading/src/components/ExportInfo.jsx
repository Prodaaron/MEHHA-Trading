// src/components/ExportInfo.jsx
import React, { useEffect, useRef } from "react";
import "./ExportInfo.css";
import oilSeedImg from "../assets/oilseeds-image-bg.jpg";
import pulsesImg from "../assets/pulses-image-bg.jpg";


// placeholder using your uploaded image
const placeholder = "/mnt/data/Screenshot (3).png";

const categories = [
  {
    title: "Oilseeds",
    desc: "Ethiopia is known for its rich variety of high-quality oilseeds that serve as major agricultural exports. Our oilseeds are sourced directly from trusted farmers and cooperatives.",
    examples: ["Sesame Seed", "Niger Seed", "Soybeans", "Flaxseed", "Castor Seed"],
    img: oilSeedImg,
    link: '/exports#oilseedsProduct'
  },
  {
    title: "Pulses",
    desc: "Handled with care, cleaned, and graded to international standards, Ethiopian pulses are valued worldwide for their quality, size uniformity, and taste.",
    examples: ["Chickpeas", "Red Kidney Beans", "Green Mung Beans", "Lupin", "White Pea Beans"],
    img: pulsesImg,
    link: '/exports#pulsesProduct'
  }
];

export default function ExportInfo() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) sectionRef.current.classList.add("section-visible");
          else sectionRef.current.classList.remove("section-visible");
        });
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    const cardObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("card-visible");
          else entry.target.classList.remove("card-visible");
        });
      },
      { threshold: 0.45 }
    );

    cardRefs.current.forEach(el => el && cardObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="export-info" ref={sectionRef}>
      <div className="export-container">
        <h2 className="export-title">What We Export</h2>
        <p className="export-sub">
          MEHHA specializes in delivering premium Ethiopian agricultural exports — focused on two major categories.
        </p>

        <div className="export-grid">
          {categories.map((c, i) => (
            <div
              className="export-card"
              key={c.title}
              ref={el => (cardRefs.current[i] = el)}
            >
              <div className="export-img">
                <img src={c.img} alt={c.title} />
              </div>

              <div className="export-body">
                <h3>{c.title}</h3>
                <p className="export-desc">{c.desc}</p>

                <ul className="export-list">
                  {c.examples.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <a className="export-link" href={c.link}>Learn More <span>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
