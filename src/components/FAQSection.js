import React, { useState } from 'react';

const FAQSection = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div className={`faq-item ${isActive ? 'active' : ''}`} key={item.question}>
                <div
                  className="faq-question"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveIndex(isActive ? null : index);
                    }
                  }}
                >
                  <h4>{item.question}</h4>
                  <i className={`fas fa-chevron-${isActive ? 'up' : 'down'}`} aria-hidden="true"></i>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;