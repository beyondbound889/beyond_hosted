import React, { useState } from 'react';
import '../css/TheSolution.css';
import bottleAbout from '../assets/bottleabout.png';

const TheSolution = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <section className="the-solution">
      <h3><span className="section-number">02</span> The Solution</h3>
      <p className="solution-description">
        We built our entire formulation philosophy around three non-negotiable principles.
      </p>

      <div className="solution-content">
        <div className="solution-items">
          <div className="solution-item-wrapper">
            <button 
              className={`solution-item ${expandedItem === 1 ? 'expanded' : ''}`}
              onClick={() => setExpandedItem(expandedItem === 1 ? null : 1)}
            >
              <div className="solution-item-left">
                <span className="solution-number">01</span>
                <span>Standardized Extracts</span>
              </div>
              <span className="dropdown-icon">▼</span>
            </button>
            {expandedItem === 1 && (
              <div className="solution-content-dropdown">
                <p>Source certified | Ratio defined | COA verified</p>
              </div>
            )}
          </div>
          <div className="solution-item-wrapper">
            <button 
              className={`solution-item ${expandedItem === 2 ? 'expanded' : ''}`}
              onClick={() => setExpandedItem(expandedItem === 2 ? null : 2)}
            >
              <div className="solution-item-left">
                <span className="solution-number">02</span>
                <span>Modern Lab Validation</span>
              </div>
              <span className="dropdown-icon">▼</span>
            </button>
            {expandedItem === 2 && (
              <div className="solution-content-dropdown">
                <p>GC-MS Testing | HPCL Analysis | NACL Accredited</p>
              </div>
            )}
          </div>
          <div className="solution-item-wrapper">
            <button 
              className={`solution-item ${expandedItem === 3 ? 'expanded' : ''}`}
              onClick={() => setExpandedItem(expandedItem === 3 ? null : 3)}
            >
              <div className="solution-item-left">
                <span className="solution-number">03</span>
                <span>Responsible Formulation</span>
              </div>
              <span className="dropdown-icon">▼</span>
            </button>
            {expandedItem === 3 && (
              <div className="solution-content-dropdown">
                <p>Ethical sourcing | Sustainable practices | Quality assured</p>
              </div>
            )}
          </div>
        </div>

        <div className="solution-image">
          <div className="product-bottle">
            <img src={bottleAbout} alt="Bottle About" />
          </div>
        </div>
      </div>

      <div className="certifications">
        <div className="cert">
          <h4>100%</h4>
          <p>Batch COAs</p>
        </div>
        <div className="cert">
          <h4>All SKUs</h4>
          <p>Third-party Tested</p>
        </div>
        <div className="cert">
          <h4>Ayush</h4>
          <p>Regulatory Compliance</p>
        </div>
        <div className="cert">
          <h4>WHO-GMP</h4>
          <p>Manufacturing Standard</p>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;

