import React from 'react';
import './GlycomicsCard.css';

const GlycomicsCard = () => {
  const data = [
    { bad: "Energy crashes after meals", good: "Steady energy all day" },
    { bad: "Constant sugar cravings", good: "Cravings noticeably reduced" },
    { bad: "Sluggish after carbs", good: "Digest meals comfortably" },
    { bad: "Belly fat that won't shift", good: "Metabolism working again" },
    { bad: "Restless, broken sleep", good: "More consistent sleep" },
  ];

  return (
    <div className="container">
      <div className="card-wrapper">
        
        {/* Left Column */}
        <div className="column">
          <h2 className="title muted">Without Glycomics</h2>
          <div className="card card-muted">
            {data.map((item, i) => (
              <div key={i} className="list-item">
                <span className="icon icon-cross">✕</span>
                <p>{item.bad}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="column">
          <h2 className="title">With Glycomics</h2>
          <div className="card card-active">
            {data.map((item, i) => (
              <div key={i} className="list-item">
                <span className="icon icon-check">✓</span>
                <p>{item.good}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <button className="cart-button">
        <span className="cart-icon">🛒</span> ADD TO CART
      </button>
    </div>
  );
};

export default GlycomicsCard;