import React, { useEffect } from "react";
import "./export.css";
import { exportProducts } from '../services/data.js';
import ExpHero from '../components/exphero.jsx';
import { useLocation } from "react-router-dom";


const Export = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".product-card");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="export-page">

      <ExpHero />

      <div className="export-psec" id="products">
        <header className="export-header">
          <h1>Our Products</h1>
          <p>Here are some in demand products we plan to export in 2025/26.</p>
        </header>
        <section className="products-grid">
          {exportProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </section>
      </div>

      
    </div>
  );
};

export default Export;