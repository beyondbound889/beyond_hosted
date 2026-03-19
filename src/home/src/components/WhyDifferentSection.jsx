import { useState } from "react";
import "../css/whyDifferentSection.css";

import cardManufactured from "../../Image (Manufactured in GMP Facility).png";
import cardLabValidated from "../../Image (GC-MS Lab Validated).png";
import cardBerberine from "../../Image (97.2 Standardized Berberine).png";

import iconManufactured from "../../Icon (5).png";
import iconValidated from "../../Container.png";
import iconBerberine from "../../Group.png";

const cards = [
  {
    id: "manufactured",
    label: "Quality Assured",
    title: "Manufactured in GMP Facility",
    description:
      "Our products are manufactured in certified Good Manufacturing Practice (GMP) facilities, ensuring the highest standards of quality, safety, and consistency in every batch.",
    cta: "Explore Details",
    image: cardManufactured,
    icon: iconManufactured,
    iconAlt: "Manufacturing quality icon",
  },
  {
    id: "validated",
    label: "Lab Verified",
    title: "GC-MS Lab Validated",
    description:
      "Every batch is independently GC-MS tested to validate purity, potency, and ingredient authenticity before release.",
    cta: "Explore Details",
    image: cardLabValidated,
    icon: iconValidated,
    iconAlt: "Lab validation icon",
  },
  {
    id: "berberine",
    label: "Standardized Potency",
    title: "97.2%\nStandardized\nBerberine",
    description:
      "We use high-potency berberine standardized to 97.2% for reliable efficacy and consistent performance.",
    cta: "Explore Details",
    image: cardBerberine,
    icon: iconBerberine,
    iconAlt: "Standardization icon",
  },
];

function WhyDifferentSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="wds-section" aria-labelledby="wds-title">
      <div className="wds-shell">
        <div className="wds-heading-wrap">
          <h3 id="wds-title" className="wds-title">
            Why It&apos;s Different
          </h3>
        </div>

        <div
          className={`wds-cards ${activeCard !== null ? "has-active" : ""}`}
          role="list"
          onMouseLeave={() => setActiveCard(null)}
        >
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            const hasActiveCard = activeCard !== null;

            return (
              <article
                key={card.id}
                className={`wds-card ${isActive ? "is-active" : ""} ${
                  hasActiveCard && !isActive ? "is-inactive" : ""
                }`}
                role="listitem"
                onMouseEnter={() => setActiveCard(index)}
              >
              <img
                src={card.image}
                alt={card.title.replaceAll("\n", " ")}
                className="wds-card-image"
                loading="lazy"
                decoding="async"
              />
              <div className="wds-overlay" aria-hidden="true" />

              <div className="wds-icon-wrap">
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className="wds-icon"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className={`wds-top-badge ${isActive ? "is-visible" : ""}`}>
                {card.label}
              </div>

              <div className="wds-content-wrap">
                <div className="wds-title-box">
                  <h4 className="wds-card-title">{card.title}</h4>
                </div>
                <div className={`wds-reveal ${isActive ? "is-visible" : ""}`}>
                  <p className="wds-description">{card.description}</p>
                  <a href="#" className="wds-cta" aria-label={`${card.cta} about ${card.title.replaceAll("\n", " ")}`}>
                    {card.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyDifferentSection;
