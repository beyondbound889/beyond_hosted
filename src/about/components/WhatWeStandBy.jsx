import React from 'react';
import '../css/WhatWeStandBy.css';
import evidenceIcon from '../assets/stock.jpeg';
import transparencyIcon from '../assets/transp.jpeg';
import longtermIcon from '../assets/safe.jpeg';
import safetyIcon from '../assets/sec.jpeg';

const WhatWeStandBy = () => {
  const values = [
    {
      id: 1,
      icon: evidenceIcon,
      title: 'Evidence-Based'
    },
    {
      id: 2,
      icon: transparencyIcon,
      title: 'Transparency'
    },
    {
      id: 3,
      icon: longtermIcon,
      title: 'Long-Term Use'
    },
    {
      id: 4,
      icon: safetyIcon,
      title: 'Safety'
    }
  ];

  return (
    <section className="what-we-stand-by">
      <h2>What we stand by. <br />Without exception.</h2>

      <div className="values-grid">
        {values.map((value) => (
          <div key={value.id} className="value-card">
            <div className="value-icon">
              <img src={value.icon} alt={value.title} />
            </div>
            <h3>{value.title}</h3>
          </div>
        ))}
      </div>

      <div className="leadership-section">
        <div className="leadership-container">
          <div className="leadership-bg-text">STANDARD{"\n"}&{"\n"}LEADERSHIP</div>
          <h2 className="leadership-title">Standard & Leadership</h2>
        </div>
        <p>
          A tight-knit group of scientists, pharmacologists, and product builders all bound by the same standard: no shortcuts on evidence.
        </p>
      </div>
    </section>
  );
};

export default WhatWeStandBy;

