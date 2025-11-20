import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>
            <i className="fas fa-shield-alt" aria-hidden="true"></i> Smishing Detection
          </h1>
          <p>Protecting mobile users worldwide</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#project">Project Idea</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <i className="fas fa-envelope" aria-hidden="true"></i> jhunren.apiag@g.msuiit.edu.ph
          </p>
          <p>
            <i className="fas fa-envelope" aria-hidden="true"></i> giopatrick.cimeni@g.msuiit.edu.ph
          </p>
          <p>
            <i className="fas fa-envelope" aria-hidden="true"></i> edison.dasok@g.msuiit.edu.ph
          </p>
          <p>
            <i className="fas fa-phone" aria-hidden="true"></i> (09) 123-4567
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Smishing Detection Research Group | All Rights Reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;