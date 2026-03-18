import React from 'react';
import './WhoIsItFor.css';
import FeatureCards from './FeatureCards';

const WhoIsItFor = () => {
  const cards = [
    {
      id: 'insulin',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      title: 'Early insulin resistance',
      desc: 'Prediabetic markers, HbA1c approaching concern, or fasting glucose trending higher — before medication becomes the answer.'
    },
    {
      id: 'metabolic',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Metabolic wellness focus',
      desc: 'Adults prioritising long-term glucose regulation and cellular health — proactively, not reactively.'
    },
    {
      id: 'plant',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      title: 'Plant-based support seekers',
      desc: 'Natural, evidence-based Ayurvedic alternatives with the same analytical rigour as pharmaceutical-grade supplements.'
    }
  ];

  return (
    <section className="science-who-is-it-for">
      <h2 className="section-title text-center">Who is it for</h2>

      <FeatureCards />

      {/* <div className="who-cards-container">
        {cards.map(card => (
          <div className="who-card" key={card.id}>
            <div className="who-card-icon">
              {card.icon}
            </div>
            <h3 className="who-card-title">{card.title}</h3>
            <p className="who-card-desc">{card.desc}</p>
          </div>
        ))}
      </div> */}

      <div className="who-disclaimer">
        <div className="disclaimer-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <div className="disclaimer-text">
          <p>Glycomics is not intended to replace prescribed medication including Metformin or other glucose-lowering drugs. If you have diagnosed diabetes or are on medication, consult your physician before use.</p>
          <p>Not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
