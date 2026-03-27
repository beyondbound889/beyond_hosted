import { useState } from "react";
import "../css/productDetailSection.css";

import bottleFront from "../../bottles.png";
import bottleLabelA from "../../Gemini_Generated_Image_5wdmlg5wdmlg5wdm 1.jpg";
import bottleLabelB from "../../Gemini_Generated_Image_5wdmlg5wdmlg5wdm 3.jpg";
import bottleLabelC from "../../101.png";

const galleryItems = [
  { id: "front", src: bottleFront, alt: "Glycomics front bottle view" },
  { id: "label-a", src: bottleLabelA, alt: "Glycomics back label view" },
  { id: "label-b", src: bottleLabelB, alt: "Glycomics composition panel view" },
  { id: "label-c", src: bottleLabelC, alt: "Glycomics label strip view" },
];

const accordionData = [
  {
    title: "Information",
    content: "This premium supplement is crafted in a GMP-certified facility. Each batch undergoes rigorous third-party testing to ensure purity and potency."
  },
  {
    title: "Benefits",
    content: "Supports healthy insulin sensitivity, reduces sugar cravings, and provides sustained energy levels throughout the day without the crash."
  },
  {
    title: "Ingredients",
    content: "Contains a proprietary blend of Gymnema Sylvestre, Bitter Melon, Fenugreek, and Chromium Picolinate for maximum metabolic support."
  }
];

function ProductDetailSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('60');
  const [openAccordion, setOpenAccordion] = useState(null);
  const activeImage = galleryItems[activeIndex];

  const sizes = [
    { value: '20', label: '20 Capsules', price: 600 },
    { value: '60', label: '60 Capsules', price: 1925 }
  ];

  const currentPrice = sizes.find(size => size.value === selectedSize)?.price || 1925;

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
            <p className="pds-price">₹{currentPrice}</p>
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
              <div className="pds-size-buttons-group">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    type="button"
                    className={`pds-size-chip ${selectedSize === size.value ? 'pds-size-chip--active' : ''}`}
                    onClick={() => setSelectedSize(size.value)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
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
              Add To Cart
            </button>
          </div>

          <p className="pds-policy">Shipping, Exchange and Returns</p>

          <div className="pds-accordion-list" role="list">
            {accordionData.map((item, index) => (
              <div key={index} className="pds-accordion-item-wrapper">
                <button
                  type="button"
                  className="pds-accordion-item"
                  role="listitem"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                </button>
                <span className="pds-accordion-plus-icon" aria-hidden="true" onClick={() => toggleAccordion(index)}>{openAccordion === index ? '-' : '+'}</span>
                {openAccordion === index && (
                  <div className="pds-accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailSection;
