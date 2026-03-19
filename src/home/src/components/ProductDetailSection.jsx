import { useState } from "react";
import "../css/productDetailSection.css";

import bottleFront from "../../Gemini_Generated_Image_5wdmlg5wdmlg5wdm 2.jpg";
import bottleLabelA from "../../Gemini_Generated_Image_5wdmlg5wdmlg5wdm 1.jpg";
import bottleLabelB from "../../Gemini_Generated_Image_5wdmlg5wdmlg5wdm 3.jpg";
import bottleLabelC from "../../4f188a24bc1b69b908ac63c465fe2c10c0b8559f.png";

const galleryItems = [
  { id: "front", src: bottleFront, alt: "Glycomics front bottle view" },
  { id: "label-a", src: bottleLabelA, alt: "Glycomics back label view" },
  { id: "label-b", src: bottleLabelB, alt: "Glycomics composition panel view" },
  { id: "label-c", src: bottleLabelC, alt: "Glycomics label strip view" },
];

const accordionItems = ["Information", "Benefits", "Ingredients"];

function ProductDetailSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const activeImage = galleryItems[activeIndex];

  return (
    <section className="pds-section" aria-labelledby="pds-title">
      <div className="pds-container">
        <div className="pds-gallery">
          <div
            className="pds-thumbnails"
            role="tablist"
            aria-label="Product image thumbnails"
          >
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`pds-thumb ${activeIndex === index ? "pds-thumb--active" : "pds-thumb--inactive"}`}
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Show ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  className="pds-thumb-image"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>

          <div className="pds-main-image-wrap">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="pds-main-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="pds-details">
          <div className="pds-badges-row">
            <span className="pds-badge pds-badge--stock">In Stock</span>
            <span className="pds-badge pds-badge--refund">
              <svg
                viewBox="0 0 12 12"
                className="pds-shield"
                aria-hidden="true"
              >
                <path
                  d="M6 0.9L10.2 2.5V6.4C10.2 8.7 8.7 10.8 6 11.4C3.3 10.8 1.8 8.7 1.8 6.4V2.5L6 0.9Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              100% Refund Guarantee
            </span>
          </div>

          <div className="pds-title-wrap">
            <h3 id="pds-title" className="pds-title">
              Glycomics
            </h3>
            <p className="pds-price">₹1925</p>
          </div>

          <div className="pds-line-wrap" aria-hidden="true">
            <span className="pds-line" />
          </div>

          <div className="pds-description-wrap">
            <p className="pds-description">
              Experience the power of scientifically-validated Ayurvedic
              ingredients. Glycomics is formulated to support healthy glucose
              metabolism and overall metabolic wellness.
            </p>

            <div className="pds-size-wrap">
              <p className="pds-size-label">Size</p>
              <button type="button" className="pds-size-chip">
                60 Capsules
              </button>
            </div>
          </div>

          <div className="pds-action-row">
            <div className="pds-qty" aria-label="Quantity selector">
              <button
                type="button"
                className={`pds-qty-btn ${quantity <= 1 ? "pds-qty-btn--disabled" : ""}`}
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <span
                  className="pds-qty-icon pds-qty-icon--minus"
                  aria-hidden="true"
                />
              </button>
              <span className="pds-qty-value">{quantity}</span>
              <button
                type="button"
                className="pds-qty-btn"
                aria-label="Increase quantity"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <span
                  className="pds-qty-icon pds-qty-icon--plus"
                  aria-hidden="true"
                >
                  <span className="pds-qty-icon-line pds-qty-icon-line--h" />
                  <span className="pds-qty-icon-line pds-qty-icon-line--v" />
                </span>
              </button>
            </div>
            <button type="button" className="pds-shop-btn">
              Shop now →
            </button>
          </div>

          <p className="pds-policy">Shipping, Exchange and Returns</p>

          <div className="pds-accordion-list" role="list">
            {accordionItems.map((item) => (
              <button
                key={item}
                type="button"
                className="pds-accordion-item"
                role="listitem"
              >
                <span>{item}</span>
                <span aria-hidden="true">+</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailSection;
