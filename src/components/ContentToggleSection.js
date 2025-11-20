import React, { useState } from 'react';

const ContentToggleSection = () => {
  const [showProblem, setShowProblem] = useState(true);

  return (
    <section className="content-toggle">
      <div className="container">
        <div className="toggle-container">
          <div id="dynamic-content" className="dynamic-content">
            {showProblem ? (
              <>
                <h3>
                  <i className="fas fa-exclamation-triangle" aria-hidden="true"></i> The Problem
                </h3>
                <p>
                  As SMS usage continues to grow globally, so do smishing attacks. These fraudulent text messages
                  trick individuals into revealing confidential information or clicking malicious links. Many users,
                  especially those less familiar with digital threats, struggle to identify deceptive messages,
                  putting personal data, finances, and privacy at significant risk.
                </p>
                <p>
                  Current solutions often rely on blacklisting known malicious URLs, but this approach fails to
                  detect new or evolving threats. There's a critical need for a proactive, intelligent system that
                  can identify potential smishing attempts in real-time.
                </p>
              </>
            ) : (
              <>
                <h3>
                  <i className="fas fa-lightbulb" aria-hidden="true"></i> Our Solution
                </h3>
                <p>
                  Our project develops a mobile-based detection system that automatically scans text messages,
                  identifies suspicious keywords or URLs, and alerts users before they engage with potentially harmful content.
                </p>
                <p>
                  The system utilizes a database-driven keyword detection method to identify potential smishing messages in real time.
                  By matching text content against a regularly updated list of known scam-related keywords and URLs, it ensures efficient
                  and reliable protection without affecting user privacy or device performance.
                </p>
              </>
            )}
          </div>
          <button
            id="toggle-content-btn"
            className="btn btn-primary"
            type="button"
            onClick={() => setShowProblem((current) => !current)}
          >
            {showProblem ? (
              <>
                <i className="fas fa-lightbulb" aria-hidden="true"></i> Show Solution
              </>
            ) : (
              <>
                <i className="fas fa-exclamation-triangle" aria-hidden="true"></i> Show Problem
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentToggleSection;