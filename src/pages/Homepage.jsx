import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';

/**
 * HomePage Component
 * Main landing page with hero, features, and team preview
 * 
 * @param {object} props - Component props
 * @param {Array} props.projects - Array of projects for stats
 * @param {Array} props.teamMembers - Array of team members
 */
const HomePage = ({ projects, teamMembers }) => {
  return (
    <>
      <Hero projects={projects} />
      
      {/* Content Section with Project Stats */}
      <section className="content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h3>The Growing Threat of Smishing</h3>
              <p>
                Smishing attacks have surged in recent years. Scammers impersonate trusted entities like 
                banks, delivery services, or government agencies to trick users into revealing sensitive 
                information or clicking malicious links.
              </p>
              <p>
                Our research titled <strong>"Keyword-Based Scam Link (Smishing) Detection in Text Messages"</strong>
                addresses this critical security gap by developing a proactive defense system.
              </p>
              <Link to="/projects" className="btn btn-primary">
                <i className="fas fa-clipboard-list"></i> View Project Logs
              </Link>
            </div>
            <div className="content-visual">
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">74%</div>
                  <div className="stat-label">Increase in Smishing Attacks</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">92%</div>
                  <div className="stat-label">Detection Accuracy</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="stat-label">Real-time Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Team teamMembers={teamMembers.slice(0, 3)} />
    </>
  );
};

export default HomePage;