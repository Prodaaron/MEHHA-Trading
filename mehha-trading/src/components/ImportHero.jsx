import React from "react";
import "./importHero.css";
import heroImg from "../assets/mes-arg/erdos-pvc-resin.webp";

const ImportHero = () => {
  return (
    <section className="importhero">
      <div className="importhero-overlay">
        <span className="importhero-eyebrow">Established Since 2017</span>
        <h1>Chemical Raw Materials, Reliably Sourced.</h1>
        <p>
          MEHHA Trading PLC imports PVC resin and DOP from certified
          manufacturers in China and South Korea, supplying Ethiopian
          factories with the materials their production lines depend on.
        </p>
      </div>

      <img src={heroImg} alt="Imported PVC resin" className="importhero-img" />
    </section>
  );
};

export default ImportHero;
