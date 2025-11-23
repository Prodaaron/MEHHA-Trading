// src/components/ProductsSection.jsx
import React, { useEffect, useRef } from "react";
import "./ProductsSection.css";

/*
  NOTE: using your uploaded image path as a placeholder.
  The developer environment will transform this local path to a served URL.
  Replace the src value with your real product images as needed.
*/
const placeholderImage = "/mnt/data/Screenshot (3).png";

const products = [
  {
    name: "Sesame Seeds",
    short: "Premium, clean, high oil content sesame seeds.",
    img: placeholderImage,
  },
  {
    name: "Soybeans",
    short: "High-protein soybeans, suitable for feed & processing.",
    img: placeholderImage,
  },
  {
    name: "Niger Seed",
    short: "Carefully graded niger seed for stable export quality.",
    img: placeholderImage,
  },
  {
    name: "Chickpeas",
    short: "Uniform size, low moisture chickpeas for global markets.",
    img: placeholderImage,
  },
  {
    name: "Red Kidney Beans",
    short: "Consistent colour and size, cleaned and sorted.",
    img: placeholderImage,
  },
  {
    name: "Green Mung Beans",
    short: "High germination, premium pulses for various uses.",
    img: placeholderImage,
  },
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // observe section for background toggling
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current.classList.add("section-visible");
          } else {
            sectionRef.current.classList.remove("section-visible");
          }
        });
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    // observe cards for staggered animation + reverse
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          } else {
            entry.target.classList.remove("card-visible");
          }
        });
      },
      { threshold: 0.45 }
    );

    cardRefs.current.forEach((c) => {
      if (c) cardObserver.observe(c);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="products-section" ref={sectionRef}>
      <div className="products-container">
        <h2 className="section-title">What We Export</h2>
        <p className="section-sub">
          Premium Ethiopian oilseeds & pulses — consistently graded, cleaned,
          and packed to international standards.
        </p>

        <div className="products-grid">
          {products.map((p, idx) => (
            <article
              className="product-card"
              key={p.name}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <div className="product-media">
                <img src={p.img} alt={p.name} />
              </div>

              <div className="product-body">
                <h3>{p.name}</h3>
                <p className="product-short">{p.short}</p>
                <a className="product-link">View Details →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}