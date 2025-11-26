import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

/**
 * NavBar Component
 * Provides navigation links using React Router's Link component
 * Uses useLocation hook to determine active page for styling
 * 
 * @param {object} props - Component props
 * @param {string} props.projectTitle - The title displayed in the navbar
 */
const NavBar = ({ projectTitle }) => {
  const location = useLocation();

  /**
   * Helper function to determine if a link is active
   * @param {string} path - The path to check
   * @returns {string} - CSS class name
   */
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header id="main-header">
      <div className="container">
        <h1>
          <i className="fas fa-shield-alt"></i> 
          {projectTitle}
        </h1>
        <nav>
          <ul>
            <li>
              {/* Link component replaces <a> tags for SPA navigation */}
              <Link to="/" className={isActive('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/idea" className={isActive('/idea')}>
                Project Idea
              </Link>
            </li>
            <li>
              <Link to="/team" className={isActive('/team')}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/projects" className={isActive('/projects')}>
                Project Logs
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;