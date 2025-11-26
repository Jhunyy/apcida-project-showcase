import React, { useState } from 'react';

/**
 * FAQ Component
 * Accordion-style FAQ section with collapsible answers
 */
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'How accurate is the detection system?',
      answer: 'Our system plans to achieve over 92% accuracy in detecting smishing attempts. We continuously update our keyword database based on the latest threat intelligence to maintain high detection rates while minimizing false positives.'
    },
    {
      question: 'Will it drain my battery?',
      answer: 'No. Our lightweight algorithm is designed to use minimal system resources. The app only activates when new messages arrive and completes scanning in milliseconds, resulting in negligible battery impact.'
    },
    {
      question: 'Is my message data stored or shared?',
      answer: 'Absolutely not. All message scanning happens locally on your device. We never store, transmit, or share your message content. Your privacy is our top priority.'
    },
    {
      question: 'How often is the keyword database updated?',
      answer: 'The keyword database is updated weekly with new smishing patterns and threat indicators. Updates download automatically over WiFi and are typically less than 1MB in size.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFAQ === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h4>{faq.question}</h4>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;