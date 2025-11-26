import React, { useState } from 'react';

/**
 * TabbedInterface Component
 * Displays information in tabs (Detection, Technology, Security)
 */
const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('detection');

  const tabs = {
    detection: {
      label: 'Detection Process',
      icon: 'fas fa-search',
      title: 'How Detection Works',
      content: [
        'Our system uses a sophisticated keyword-matching algorithm that scans incoming SMS messages in real-time. When a message arrives, it\'s instantly analyzed against our database of known smishing patterns, suspicious keywords, and malicious URL structures.',
        'Real-time message scanning',
        'Pattern recognition algorithms',
        'Instant threat identification',
        'User-friendly alert system'
      ]
    },
    technology: {
      label: 'Technology',
      icon: 'fas fa-microchip',
      title: 'Technology Stack',
      content: [
        'Built with modern mobile development technologies, our solution is lightweight, fast, and doesn\'t compromise device performance. The keyword database is regularly updated to stay ahead of emerging threats.',
        'Native Android development',
        'SQLite database for fast keyword matching',
        'Minimal battery and data usage',
        'Regular cloud-based updates'
      ]
    },
    security: {
      label: 'Security',
      icon: 'fas fa-lock',
      title: 'Privacy & Security',
      content: [
        'We prioritize user privacy. All message scanning happens locally on your device, and no message content is ever transmitted to external servers. Your data stays yours, always.',
        '100% local processing',
        'No message data collection',
        'Encrypted keyword database',
        'Open-source security audits'
      ]
    }
  };

  const currentTab = tabs[activeTab];

  return (
    <section className="tabs-section">
      <div className="container">
        <h2>How It Works</h2>
        <div className="tabs-container">
          <div className="tab-buttons">
            {Object.keys(tabs).map(tabKey => (
              <button
                key={tabKey}
                className={`tab-button ${activeTab === tabKey ? 'active' : ''}`}
                onClick={() => setActiveTab(tabKey)}
              >
                <i className={tabs[tabKey].icon}></i>
                {tabs[tabKey].label}
              </button>
            ))}
          </div>
          
          <div className="tabcontent-wrapper">
            <div className="tab-panel active">
              <h3>{currentTab.title}</h3>
              <p>{currentTab.content[0]}</p>
              <ul>
                {currentTab.content.slice(1).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedInterface;