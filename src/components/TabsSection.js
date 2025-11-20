import React, { useState } from 'react';

const TabsSection = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '');

  return (
    <section className="tabs-section">
      <div className="container">
        <h2>How It Works</h2>
        <div className="tabs-container">
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={tab.icon} aria-hidden="true"></i> {tab.title}
              </button>
            ))}
          </div>

          <div className="tabcontent-wrapper">
            {tabs.map((tab) => (
              <div key={tab.id} className={`tab-panel ${activeTab === tab.id ? 'active' : ''}`}>
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
                <ul>
                  {tab.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;