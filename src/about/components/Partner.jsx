import React from 'react';
import '../css/Partner.css';
import riidlLogo from '../assets/riidl.png';

const Partner = () => {
  return (
    <section className="partner">
      <h2>Partner</h2>

      <div className="partner-container">
        <div className="partner-card">
          <div className="partner-logo">
            <img src={riidlLogo} alt="Ridi Logo" />
          </div>
          <p className="partner-info">Partner & Advisor in Beyond Bound</p>
        </div>
      </div>
    </section>
  );
};

export default Partner;

