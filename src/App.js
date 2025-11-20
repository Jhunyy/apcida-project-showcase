import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';
import ContentToggleSection from './components/ContentToggleSection';
import TabsSection from './components/TabsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = typeof Storage !== 'undefined' ? localStorage.getItem('theme') : null;
    const initialTheme = storedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = useMemo(
    () => [
      { label: 'Home', href: '#hero' },
      { label: 'Project Idea', href: '#project' },
      { label: 'Features', href: '#features' },
      { label: 'Team', href: '#team' },   // optional but recommended
      { label: 'FAQ', href: '#faq' }
    ],
    []
  );

  const stats = useMemo(
    () => [
      { number: '74%', label: 'Increase in Smishing Attacks' },
      { number: '92%', label: 'Detection Accuracy' },
      { number: '⚡', label: 'Real-time Protection' }
    ],
    []
  );

  const featureCards = useMemo(
    () => [
      {
        icon: 'fas fa-search',
        title: 'Smart Scanning',
        description: 'Automatically scans incoming SMS for suspicious keywords and URLs'
      },
      {
        icon: 'fas fa-bell',
        title: 'Instant Alerts',
        description: 'Provides real-time warnings when potential threats are detected'
      },
      {
        icon: 'fas fa-brain',
        title: 'Database Driven',
        description: 'Uses keywords stored in database for fast, lightweight detection'
      },
      {
        icon: 'fas fa-lock',
        title: 'Privacy First',
        description: 'Protects your data without compromising your personal information'
      }
    ],
    []
  );

  const tabs = useMemo(
    () => [
      {
        id: 'detection',
        icon: 'fas fa-search',
        title: 'Detection Process',
        content: [
          'Real-time message scanning',
          'Pattern recognition algorithms',
          'Instant threat identification',
          'User-friendly alert system'
        ],
        description:
          'Our system uses a keyword-matching algorithm that scans messages as soon as they arrive...'
      },
      {
        id: 'technology',
        icon: 'fas fa-microchip',
        title: 'Technology Stack',
        content: [
          'Native Android development',
          'SQLite database for fast keyword matching',
          'Minimal battery and data usage',
          'Regular cloud-based updates'
        ],
        description:
          'Built with modern mobile development technologies...'
      },
      {
        id: 'security',
        icon: 'fas fa-lock',
        title: 'Security',
        content: [
          '100% local processing',
          'No message data collection',
          'Encrypted keyword database',
          'Open-source security audits'
        ],
        description:
          'We prioritize user privacy. All processing happens locally...'
      }
    ],
    []
  );

  const faqItems = useMemo(
    () => [
      {
        question: 'How accurate is the detection system?',
        answer:
          'The system aims for over 92% detection accuracy...'
      },
      {
        question: 'Will it drain my battery?',
        answer:
          'No. The algorithm only runs when new messages arrive.'
      },
      {
        question: 'Is my message data stored or shared?',
        answer:
          'No message content is stored or transmitted. Everything stays on your device.'
      },
      {
        question: 'How often is the keyword database updated?',
        answer:
          'Weekly updates ensure the system stays effective against new threats.'
      }
    ],
    []
  );

  return (
    <>
      <Header
        title="Innovation Project Showcase"
        navLinks={navLinks}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main>
        <HeroSection />

        <ContentSection stats={stats} />

        <FeaturesSection cards={featureCards} />

        {/* 🔹 Add Team Section here */}
        <TeamSection />

        <ContentToggleSection />

        <TabsSection tabs={tabs} />

        <FAQSection items={faqItems} />
      </main>

      <Footer />
    </>
  );
};

export default App;
