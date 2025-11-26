import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero Component
 * Main landing section with project title and CTA buttons
 */
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Keyword-Based Scam Link Detection</h2>
          <p className="subtitle">Protecting users from Smishing attacks in real-time</p>
          <p className="intro">
            The rapid growth of mobile technology has transformed communication. SMS remains 
            one of the most reliable channels, especially among older demographics. However, 
            this convenience comes with increasing security risks.
          </p>
          <div className="hero-buttons">
            <Link to="/idea" className="btn btn-primary">
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/team" className="btn btn-secondary">
              Meet Our Team
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="message warning">
                <div className="message-header">
                  <span className="sender">Suspicious Sender</span>
                  <span className="time">Now</span>
                </div>
                <div className="message-body">
                  <p>Click here to claim your prize: bit.ly/fake-link</p>
                  <div className="warning-badge">
                    <i className="fas fa-exclamation-triangle"></i> Potential Scam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;