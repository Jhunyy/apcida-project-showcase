import React from 'react';

const Header = ({ title, navLinks, onToggleTheme, theme }) => (
  <header id="main-header">
    <div className="container">
      <h1>
        <i className="fas fa-shield-alt" aria-hidden="true"></i> {title}
      </h1>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <button
              id="theme-toggle"
              className="theme-toggle"
              aria-label="Toggle dark/light mode"
              title="Switch theme"
              type="button"
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;