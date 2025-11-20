import React from 'react';

const FeaturesSection = ({ cards }) => (
  <section className="features" id="features">
    <div className="container">
      <h3>Key Protection Features</h3>
      <div className="features-grid">
        {cards.map((card) => (
          <div className="feature-card" key={card.title}>
            <div className="feature-icon">
              <i className={card.icon} aria-hidden="true"></i>
            </div>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;