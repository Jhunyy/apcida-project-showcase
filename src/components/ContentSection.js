import React from 'react';

const ContentSection = ({ stats }) => (
  <section className="content" id="project">
    <div className="container">
      <div className="content-grid">
        <div className="content-text">
          <h3>The Growing Threat of Smishing</h3>
          <p>
            Smishing attacks have surged in recent years. Scammers impersonate trusted entities like banks,
            delivery services, or government agencies to trick users into revealing sensitive information or
            clicking malicious links.
          </p>
          <p>
            Our research titled{' '}
            <strong>“Keyword-Based Scam Link (Smishing) Detection in Text Messages”</strong> addresses this
            critical security gap by developing a proactive defense system.
          </p>
        </div>
        <div className="content-visual">
          <div className="stats-container">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentSection;