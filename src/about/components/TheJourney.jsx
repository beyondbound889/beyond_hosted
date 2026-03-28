import React, { useState } from 'react';
import '../css/TheJourney.css';

const TheJourney = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const journey = [
    {
      year: '2026',
      title: 'Market Launch',
      description: '(March - April 2026)',
      active: true
    },
    {
      year: '2025',
      title: 'Ayush certified & product ready for Clinical trail',
      description: '( sep 2024 - oct 2025)'
    },
    {
      year: '2024',
      title: 'Invitro, Formulation & development',
      description: '( May 2024- Sep 2024)'
    },
    {
      year: '2023',
      title: 'Ideation & R&D',
      description: '( Nov 2023- Dec 2023)'
    }
  ];

  return (
    <section className="the-journey">
      <div className="journey-container">
        <h2>Our Journey</h2>
        <p className="journey-subtitle">
          From pharmacological hypothesis to market-ready formulation in under 24 months.
        </p>
      </div>

      <div className="timeline">
        {journey.map((item, index) => (
          <div 
            key={index} 
            className={`timeline-item ${hoveredIndex === index ? 'hovered' : ''} ${item.active && hoveredIndex === 0 ? 'active' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h3>{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheJourney;

