import React from 'react';
import './Ingredients.css';
import berberineImg from './assets/berberine.png';
import gurmarImg from './assets/gurmar.png';
import vijaysarImg from './assets/vijaysar.png';

const Ingredients = () => {
  const ingredients = [
    {
      id: 'berberine',
      name: 'Berberine',
      amount: '500 mg',
      desc: 'Guides your cells to use glucose better',
      img: berberineImg,
      badge: 'Hero Ingredient'
    },
    {
      id: 'gurmar',
      name: 'Gurmar',
      amount: '80 mg',
      desc: 'Stops sugar rushing into your blood',
      img: gurmarImg
    },
    {
      id: 'vijaysar',
      name: 'Vijaysar',
      amount: '60 mg',
      desc: 'Keeps your insulin-making cells healthy',
      img: vijaysarImg
    }
  ];

  return (
    <section className="science-ingredients">
      <h2 className="section-title text-center">Key ingredients</h2>
      
      <div className="ingredients-header">
        <div className="ingredients-title-wrapper">
          <h3 className="ingredients-subtitle">
            7 ingredients.<br/>
            Zero fillers.
          </h3>
        </div>
        <div className="ingredients-desc-wrapper">
          <p className="ingredients-desc">
            Each ingredient has a specific, evidence-backed role. Tap any to see how it fits the mechanism.
          </p>
        </div>
      </div>
      
      <div className="ingredients-grid">
        {ingredients.map(ing => (
          <div className="ingredient-card-wrapper" key={ing.id}>
            <div className="ingredient-card">
              {ing.badge && <div className="ingredient-badge">{ing.badge}</div>}
              
              <div className="ingredient-img-container">
                <div className="ingredient-img-bg"></div>
                <img src={ing.img} alt={ing.name} className="ingredient-img" />
              </div>
              
              <h4 className="ingredient-name">{ing.name}</h4>
              <span className="ingredient-amount">{ing.amount}</span>
              <p className="ingredient-feature">{ing.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ingredients;
