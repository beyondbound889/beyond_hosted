import React from 'react';
import '../css/HowWeFormulate.css';
import solutionImg from '../assets/solution.png';

const HowWeFormulate = () => {
  const steps = [
    {
      id: '01',
      title: 'Research & Literature Review',
      tags: ['PubMed', 'Human RCTs', 'Safety Data']
    },
    {
      id: '02',
      title: 'Standardized Extraction',
      tags: ['Source certified', 'Ratio defined', 'COA Verified']
    },
    {
      id: '03',
      title: 'Lab Validation & Quality Control',
      tags: ['GC-MS Testing', 'HPCL Analysis', 'NACL Accredited']
    }
  ];

  return (
    <section className="how-we-formulate">
      <div className="formulate-image">
        <img src={solutionImg} alt="How We Formulate" />
      </div>
      <div className="formulate-content">
        <h2>How We Formulate</h2>
        <p className="formulate-subtitle">
          A three-phase process that eliminates guesswork and ensures every batch meets our declared specifications.
        </p>

        <div className="formulation-steps">
          {steps.map((step) => (
            <div key={step.id} className="formulation-step">
              <h4>{step.title}</h4>
              <p className="step-tags">{step.tags.join(' | ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeFormulate;

