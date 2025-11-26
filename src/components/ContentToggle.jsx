import React, { useState } from 'react';

/**
 * ContentToggle Component
 * Toggles between Problem and Solution content
 */
const ContentToggle = () => {
  const [showingProblem, setShowingProblem] = useState(true);

  const problemContent = {
    title: 'The Problem',
    icon: 'fas fa-exclamation-triangle',
    content: [
      "As SMS usage continues to grow globally, so do smishing attacks. These fraudulent text messages trick individuals into revealing confidential information or clicking malicious links. Many users, especially those less familiar with digital threats, struggle to identify deceptive messages, putting personal data, finances, and privacy at significant risk.",
      "Current solutions often rely on blacklisting known malicious URLs, but this approach fails to detect new or evolving threats. There's a critical need for a proactive, intelligent system that can identify potential smishing attempts in real-time."
    ]
  };

  const solutionContent = {
    title: 'Our Solution',
    icon: 'fas fa-lightbulb',
    content: [
      "Our project develops a mobile-based detection system that automatically scans text messages, identifies suspicious keywords or URLs, and alerts users before they engage with potentially harmful content.",
      "The system utilizes a database-driven keyword detection method to identify potential smishing messages in real time. By matching text content against a regularly updated list of known scam-related keywords and URLs, it ensures efficient and reliable protection without affecting user privacy or device performance."
    ]
  };

  const currentContent = showingProblem ? problemContent : solutionContent;

  const toggleContent = () => {
    setShowingProblem(!showingProblem);
  };

  return (
    <section className="content-toggle">
      <div className="container">
        <div className="toggle-container">
          <div id="dynamic-content" className="dynamic-content">
            <h3>
              <i className={currentContent.icon}></i> {currentContent.title}
            </h3>
            {currentContent.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button 
            id="toggle-content-btn" 
            className="btn btn-primary"
            onClick={toggleContent}
          >
            <i className={showingProblem ? 'fas fa-lightbulb' : 'fas fa-exclamation-triangle'}></i> 
            {showingProblem ? 'Show Solution' : 'Show Problem'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentToggle;