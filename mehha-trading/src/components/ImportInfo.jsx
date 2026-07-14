// src/components/ImportInfo.jsx
import React, { useEffect, useRef } from "react";
import "./ImportInfo.css";
import pvcResinImg from "../assets/mes-arg/hygain-pvc-resin.jpg";
import dopImg from "../assets/mes-arg/ac-dop.jpg";

const categories = [
  {
    title: "PVC Resin",
    desc: "Bulk polyvinyl chloride resin sourced from established manufacturers in China, supplied in standard 25kg bags for Ethiopia's plastics and manufacturing industries.",
    examples: ["Grade SG-5", "Grade H5-1000R", "Erdos", "HyGain"],
    img: pvcResinImg,
  },
  {
    title: "DOP (Plasticizer)",
    desc: "Dioctyl phthalate imported from certified petrochemical producers in South Korea, supplied in 200kg drums for PVC processing and plastics manufacturing.",
    examples: ["Aekyung Petrochemical", "200kg Drums", "Made in Korea"],
    img: dopImg,
  },
];

export default function ImportInfo() {
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
    <section className="import-info" ref={sectionRef}>
      <div className="import-container">
        <h2 className="import-title">What We Import</h2>
        <p className="import-sub">
          MEHHA's core business: sourcing chemical raw materials from trusted
          international manufacturers for Ethiopian industry.
        </p>

        <div className="import-grid">
          {categories.map((c, i) => (
            <div
              className="import-card"
              key={c.title}
              ref={el => (cardRefs.current[i] = el)}
            >
              <div className="import-img">
                <img src={c.img} alt={c.title} />
              </div>

              <div className="import-body">
                <h3>{c.title}</h3>
                <p className="import-desc">{c.desc}</p>

                <ul className="import-list">
                  {c.examples.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <a className="import-cta" href="/imports">
          Explore Our Import Catalog <span>→</span>
        </a>
      </div>
    </section>
  );
}
