import React from 'react';
import ContentToggle from '../components/ContentToggle';
import TabbedInterface from '../components/TabbedInterface';
import FAQ from '../components/FAQ';

/**
 * IdeaPage Component
 * Displays project idea, methodology, and FAQ
 */
const IdeaPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1><i className="fas fa-lightbulb"></i> Project Idea</h1>
          <p>Discover our innovative approach to combating smishing attacks</p>
        </div>
      </div>
      <ContentToggle />
      <TabbedInterface />
      <FAQ />
    </>
  );
};

export default IdeaPage;