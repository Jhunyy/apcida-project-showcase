import React from 'react';
import Team from '../components/Team';

/**
 * TeamPage Component
 * Displays full team information and values
 * 
 * @param {object} props - Component props
 * @param {Array} props.teamMembers - Array of team member objects
 */
const TeamPage = ({ teamMembers }) => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1><i className="fas fa-users"></i> Our Team</h1>
          <p>Meet the researchers behind the innovation</p>
        </div>
      </div>
      <Team teamMembers={teamMembers} />
      
      {/* Team Values Section */}
      <section className="team-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Security First</h3>
              <p>We prioritize user security in every decision we make.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>User-Centered</h3>
              <p>We design with the user in mind, creating intuitive interfaces.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continuously explore new technologies and approaches.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We operate with transparency and honesty.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;