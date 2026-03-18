import React from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13h4v8H3v-8zm6-4h4v12H9V9zm6-6h4v18h-4V3z" fill="currentColor" />
                </svg>
            ),
            title: "Early insulin resistance",
            description: "Prediabetic markers, HbA1c approaching concern, or fasting glucose trending higher — before medication becomes the answer."
        },
        {
            id: 2,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: "Metabolic wellness focus",
            description: "Adults prioritising long-term glucose regulation and cellular health — proactively, not reactively."
        },
        {
            id: 3,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="currentColor" />
                </svg>
            ),
            title: "Plant-based support seekers",
            description: "Natural, evidence-based Ayurvedic alternatives with the same analytical rigour as pharmaceutical-grade supplements."
        }
    ];

    return (
        <div className="feature-cards-container">
            {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                    <div className="icon-wrapper">
                        <div className="icon">
                            {feature.icon}
                        </div>
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureCards;