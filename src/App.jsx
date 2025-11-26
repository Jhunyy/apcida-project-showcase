import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import IdeaPage from './pages/IdeaPage';
import TeamPage from './pages/TeamPage';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Project logs state
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Keyword-Based Scam Link Detection',
      status: 'In Progress',
      description: 'Developing a mobile-based detection system for smishing attacks using keyword matching algorithms.',
      category: 'Mobile Security',
      progress: 75,
      lastUpdated: '2025-01-15'
    },
    {
      id: 2,
      title: 'Database Architecture Design',
      status: 'Completed',
      description: 'Designed and implemented the keyword database for real-time threat detection.',
      category: 'Backend',
      progress: 100,
      lastUpdated: '2025-01-10'
    },
    {
      id: 3,
      title: 'User Interface Development',
      status: 'In Progress',
      description: 'Creating intuitive and accessible UI for SMS threat alerts and user notifications.',
      category: 'Frontend',
      progress: 60,
      lastUpdated: '2025-01-14'
    },
    {
      id: 4,
      title: 'Machine Learning Model Training',
      status: 'Planning',
      description: 'Training ML models to improve detection accuracy and reduce false positives.',
      category: 'AI/ML',
      progress: 25,
      lastUpdated: '2025-01-12'
    },
    {
      id: 5,
      title: 'Testing & Quality Assurance',
      status: 'In Progress',
      description: 'Comprehensive testing of detection algorithms with real-world smishing samples.',
      category: 'QA',
      progress: 45,
      lastUpdated: '2025-01-13'
    }
  ]);

  // Team members state
  const [teamMembers] = useState([
    {
      id: 1,
      name: 'Jhunren A. Apiag',
      role: 'Lead Researcher & Developer',
      bio: 'Jhunren specializes in mobile security and machine learning, leading the technical implementation and research for the project.',
      image: '/jhunren.jpg',
      skills: ['React', 'Android', 'Machine Learning', 'UI/UX'],
      email: 'jhunren.apiag@g.msuiit.edu.ph',
    },
    {
      id: 2,
      name: 'Gio Patrick Cimeni',
      role: 'Database Architect & Analyst',
      bio: 'Gio designed and manages the keyword database, ensuring optimal performance and data integrity for real-time threat detection.',
      image: '/gio.jpg',
      skills: ['SQL', 'Database Mgt.', 'Data Analysis', 'Python'],
      email: 'giopatrick.cimeni@g.msuiit.edu.ph',
    },
    {
      id: 3,
      name: 'Edison A. Dasok',
      role: 'Project Manager & QA',
      bio: 'Edison oversees the project lifecycle, ensuring milestones are met. He also leads the quality assurance and testing efforts.',
      image: '/edison.jpg',
      skills: ['Agile', 'Project Mgt.', 'QA Testing', 'Scrum'],
      email: 'edison.dasok@g.msuiit.edu.ph',
    }
  ]);

  // Functions to update project state
  const updateProjectStatus = (projectId, newStatus) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === projectId
          ? { ...project, status: newStatus, lastUpdated: new Date().toISOString().split('T')[0] }
          : project
      )
    );
  };

  const updateProjectProgress = (projectId, newProgress) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === projectId
          ? { ...project, progress: newProgress, lastUpdated: new Date().toISOString().split('T')[0] }
          : project
      )
    );
  };

  const deleteProject = (projectId) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar projectTitle="Innovation Project Showcase" />
          
          <main>
            <Routes>
              <Route 
                path="/" 
                element={<HomePage projects={projects} teamMembers={teamMembers} />} 
              />
              <Route 
                path="/idea" 
                element={<IdeaPage />} 
              />
              <Route 
                path="/team" 
                element={<TeamPage teamMembers={teamMembers} />} 
              />
              <Route 
                path="/projects" 
                element={
                  <ProjectList 
                    projects={projects}
                    onUpdateStatus={updateProjectStatus}
                    onUpdateProgress={updateProjectProgress}
                    onDeleteProject={deleteProject}
                  />
                } 
              />
              <Route 
                path="/project/:id" 
                element={
                  <ProjectDetail 
                    projects={projects}
                    onUpdateStatus={updateProjectStatus}
                    onUpdateProgress={updateProjectProgress}
                  />
                } 
              />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;