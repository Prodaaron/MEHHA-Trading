import React from "react";
import "./SecondSection.css";
import productImg from "../assets/mes-arg/erdos-pvc-resin.jpg";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="second-container">

        <div className="second-image">
          <img src={productImg} alt="Imported PVC Resin" />
        </div>

        <div className="second-content">
          <h2>Our Import Business Is Established</h2>
          <p>
            Since 2017, MEHHA Trading PLC has imported PVC resin, DOP
            (plasticizer), and other chemical raw materials from trusted
            manufacturers in China and South Korea — supplying Ethiopian
            factories that depend on a consistent, reliable source.
          </p>

          <a className="second-link" href="/imports">
            View Import Products <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SecondSection;
