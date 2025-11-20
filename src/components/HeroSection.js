import React from 'react';

const Hero = () => {
  const handleMeetTeam = (e) => {
    e.preventDefault();
    const el = document.getElementById('team');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Keyword-Based Scam Link Detection</h2>
          <p className="subtitle">Protecting users from Smishing attacks in real-time</p>
          <p className="intro">
            The rapid growth of mobile technology has transformed communication. SMS remains one of the most
            reliable channels, especially among older demographics. However, this convenience comes with increasing
            security risks.
          </p>

          <div className="hero-buttons">
            <a href="#project" className="btn btn-primary">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>

            <button type="button" className="btn btn-secondary" onClick={handleMeetTeam}>
              Meet Our Team
            </button>
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
                    <i className="fas fa-exclamation-triangle" aria-hidden="true"></i> Potential Scam
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
