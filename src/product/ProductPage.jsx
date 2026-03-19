import React, { useState } from 'react'; // <--- Is this exactly like this?
import frontImg from './assets/front.jpg';
import backImg from './assets/back.jpg';
import sideImg from './assets/side.png';
import labelImg from './assets/label.png';
import { ShieldIcon, ArrowRight } from 'lucide-react';

import './ProductPage.css';
const ProductPage = () => {
  const images = [frontImg, backImg, sideImg, labelImg];
  const [mainImage, setMainImage] = useState(frontImg);
  const [quantity, setQuantity] = useState(1);
  
  // State to track which accordion is open (null means all closed)
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleAccordion = (index) => {
    console.log("clicked")
    // If the clicked one is already open, close it (set to null), otherwise open it
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='body-pp'>
      <div className="product-container">
        {/* Left: Image Gallery */}
        <div className="gallery-section">
          <div className="thumbnails">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`thumb-box ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`view ${index}`} />
              </div>
            ))}
          </div>
          <div className="main-display">
            <img src={mainImage} alt="Glycomics Supplement" />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="details-section">
          <div className="badge-row">
            <span className="badge stock-badge">In Stock</span>
            <span className="badge refund-badge"><ShieldIcon size={'16px'}/> 100% Refund Guarantee</span>
          </div>

          <h1 className="product-title">Glycomics</h1>
          <p className="price">M.R.P : ₹ 1,925</p>

          <p className="description">
            Experience the power of scientifically-validated Ayurvedic ingredients. 
            Glycomics is formulated to support healthy glucose metabolism and overall metabolic wellness.
          </p>

          <div className="size-selector">
            <label>Size</label>
            <button className="size-btn active">60 Capsules</button>
          </div>

          <div className="purchase-actions">
            <div className="quantity-counter">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-to-cart-btn">
              SHOP NOW <ArrowRight />
            </button>
          </div>

          <a href="#" className="shipping-link">Shipping, Exchange and Returns</a>

          {/* Dynamic Accordion Section */}
          <div className="accordion-section">
            {accordionData.map((item, index) => (
              <div key={index} className="accordion-wrapper">
                <div 
                  className="accordion-item" 
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span> 
                  <span>{activeIndex === index ? '−' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
