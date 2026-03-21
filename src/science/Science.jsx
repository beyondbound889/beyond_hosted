import React from 'react';
import Hero from './Hero';
import Mechanism from './Mechanism';
import HowItWorks from './HowItWorks';
import Ingredients from './Ingredients';
import Research from './Research';
import WhoIsItFor from './WhoIsItFor';
import CTA from './CTA';
import './Science.css';

const Science = () => {
  return (
    <div className="science-page">
      <main>
        <Hero />
        <Mechanism />
        <HowItWorks />
        <Ingredients />
        <Research />
        <WhoIsItFor />
        <CTA />
      </main>
    </div>
  );
};

export default Science;
