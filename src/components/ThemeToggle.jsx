import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

/**
 * ThemeToggle Component
 * Button to toggle between dark and light mode
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    
    // Add button animation
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.style.transform = 'scale(0.9)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
  };

  return (
    <button 
      id="theme-toggle" 
      className="theme-toggle" 
      onClick={handleToggle}
      aria-label="Toggle dark/light mode"
      title="Switch theme"
    >
      {theme === 'light' ? (
        <i className="fas fa-moon" aria-hidden="true"></i>
      ) : (
        <i className="fas fa-sun" aria-hidden="true"></i>
      )}
    </button>
  );
};

export default ThemeToggle;