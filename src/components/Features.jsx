import React from 'react';

/**
 * Features Component
 * Displays key features of the smishing detection system
 */
const Features = () => {
  const features = [
    {
      icon: 'fas fa-search',
      title: 'Smart Scanning',
      description: 'Automatically scans incoming SMS for suspicious keywords and URLs'
    },
    {
      icon: 'fas fa-bell',
      title: 'Instant Alerts',
      description: 'Provides real-time warnings when potential threats are detected'
    },
    {
      icon: 'fas fa-brain',
      title: 'Database Driven',
      description: 'Uses keywords stored in database for fast, lightweight detection'
    },
    {
      icon: 'fas fa-lock',
      title: 'Privacy First',
      description: 'Protects your data without compromising your personal information'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h3>Key Protection Features</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;