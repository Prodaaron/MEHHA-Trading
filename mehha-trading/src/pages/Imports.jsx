import React from 'react';
import './import.css';
import ImportHero from '../components/ImportHero.jsx';
import ImportInfo from '../components/ImportInfo.jsx';
import WhyChooseMehha from '../components/WhyChooseMehha.jsx';
import PartnershipForm from '../components/PartnershipForm.jsx';

const Imports = () => {
  return (
    <div className="import-page">
      <ImportHero />

      <section className="import-supply-note">
        <div className="import-supply-container">
          <h2>How We Supply</h2>
          <div className="import-supply-grid">
            <div className="import-supply-card">
              <span className="import-supply-num">01</span>
              <h3>Sourced from Certified Manufacturers</h3>
              <p>We work directly with established producers in China and South Korea, including Erdos, HyGain, and Aekyung Petrochemical.</p>
            </div>
            <div className="import-supply-card">
              <span className="import-supply-num">02</span>
              <h3>Shipped & Cleared</h3>
              <p>Every shipment is tracked from port of origin through customs clearance in Ethiopia, so orders arrive as scheduled.</p>
            </div>
            <div className="import-supply-card">
              <span className="import-supply-num">03</span>
              <h3>Delivered to Your Facility</h3>
              <p>Bulk quantities of PVC resin and DOP are delivered directly to manufacturers, distributors, and wholesalers across Ethiopia.</p>
            </div>
          </div>
        </div>
      </section>

      <ImportInfo />
      <WhyChooseMehha />
      <PartnershipForm />
    </div>
  );
};

export default Imports;
