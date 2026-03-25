import React from 'react';
import '../css/StoryIntro.css';
import expirementImg from '../assets/expirement.png';
import meetImg from '../assets/meet.png';
import logoImg from '../assets/beyond.png';

const StoryIntro = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="story-intro">
      <div className="intro-top">
        <div className="intro-left">
          <h1 className="intro-title">Beyond<br />Bound</h1>
          <p className="intro-subtitle">Rapid Control with Ayurveda</p>
        </div>

        <div className="intro-right">
          <div className="intro-nav-buttons">
            <button className="intro-nav-button" onClick={() => scrollToSection('our-story-section')}>
              <span className="intro-button-number">01</span>
              <span className="intro-button-text">Our Story</span>
              <span className="intro-button-arrow">↗</span>
            </button>
            <button className="intro-nav-button" onClick={() => scrollToSection('mission-vision-section')}>
              <span className="intro-button-number">02</span>
              <span className="intro-button-text">Mission & Vision</span>
              <span className="intro-button-arrow">↗</span>
            </button>
            <button className="intro-nav-button" onClick={() => scrollToSection('our-team-section')}>
              <span className="intro-button-number">03</span>
              <span className="intro-button-text">Our Team</span>
              <span className="intro-button-arrow">↗</span>
            </button>
          </div>
        </div>
      </div>

      <div className="intro-logo">
        <img src={logoImg} alt="Beyond Logo" className="logo-image" />
      </div>

      <div className="intro-images-container">
        <div className="intro-image">
          <img src={expirementImg} alt="Experiment" />
        </div>
        <div className="intro-image-right">
          <img src={meetImg} alt="Team Meeting" />
        </div>
      </div>
    </section>
  );
};

export default StoryIntro;

