import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * ProjectList Component
 * Displays all projects in a list view with interactive elements
 * Receives state via props and callback functions to update parent state
 * 
 * @param {object} props - Component props
 * @param {Array} props.projects - Array of project objects from parent state
 * @param {Function} props.onUpdateStatus - Callback to update project status
 * @param {Function} props.onUpdateProgress - Callback to update project progress
 * @param {Function} props.onDeleteProject - Callback to delete a project
 */
const ProjectList = ({ projects, onUpdateStatus, onUpdateProgress, onDeleteProject }) => {
  const [filterStatus, setFilterStatus] = useState('All');

  /**
   * Filter projects based on selected status
   */
  const filteredProjects = filterStatus === 'All' 
    ? projects 
    : projects.filter(project => project.status === filterStatus);

  /**
   * Handle status change for a project
   * Calls parent's callback function to update state
   */
  const handleStatusChange = (projectId, currentStatus) => {
    const statuses = ['Planning', 'In Progress', 'Completed', 'On Hold'];
    const currentIndex = statuses.indexOf(currentStatus);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    onUpdateStatus(projectId, nextStatus);
  };

  /**
   * Get status badge color based on status value
   */
  const getStatusColor = (status) => {
    const colors = {
      'Planning': '#ffc107',
      'In Progress': '#2196f3',
      'Completed': '#4caf50',
      'On Hold': '#ff5722'
    };
    return colors[status] || '#757575';
  };

  return (
    <section className="project-list-section">
      <div className="container">
        <div className="page-header">
          <h1>
            <i className="fas fa-tasks"></i> Project Logs
          </h1>
          <p>Track the progress and status of all ongoing research projects</p>
        </div>

        {/* Filter Controls */}
        <div className="filter-controls">
          <h3>Filter by Status:</h3>
          <div className="filter-buttons">
            {['All', 'Planning', 'In Progress', 'Completed', 'On Hold'].map(status => (
              <button
                key={status}
                className={`filter-btn ${filterStatus === status ? 'active' : ''}`}
                onClick={() => setFilterStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat-card">
            <i className="fas fa-clipboard-list"></i>
            <div className="stat-info">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">Total Projects</span>
            </div>
          </div>
          <div className="stat-card">
            <i className="fas fa-spinner"></i>
            <div className="stat-info">
              <span className="stat-number">
                {projects.filter(p => p.status === 'In Progress').length}
              </span>
              <span className="stat-label">In Progress</span>
            </div>
          </div>
          <div className="stat-card">
            <i className="fas fa-check-circle"></i>
            <div className="stat-info">
              <span className="stat-number">
                {projects.filter(p => p.status === 'Completed').length}
              </span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </div>

        {/* Projects Grid - Uses .map() to render each project */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  <span 
                    className="status-badge" 
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                </div>
                
                <div className="project-card-body">
                  <p className="project-category">
                    <i className="fas fa-tag"></i> {project.category}
                  </p>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span className="progress-value">{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${project.progress}%`,
                          backgroundColor: getStatusColor(project.status)
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="project-updated">
                    <i className="far fa-calendar"></i> Last updated: {project.lastUpdated}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="project-card-actions">
                  {/* Change Status Button - triggers state update in parent */}
                  <button 
                    className="btn btn-status"
                    onClick={() => handleStatusChange(project.id, project.status)}
                    title="Click to cycle through statuses"
                  >
                    <i className="fas fa-sync-alt"></i> Change Status
                  </button>
                  
                  {/* View Details Link - navigates to detail page */}
                  <Link 
                    to={`/project/${project.id}`} 
                    className="btn btn-primary"
                  >
                    <i className="fas fa-eye"></i> View Details
                  </Link>
                  
                  {/* Delete Button */}
                  <button 
                    className="btn btn-danger"
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
                        onDeleteProject(project.id);
                      }
                    }}
                    title="Delete this project"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <i className="fas fa-folder-open"></i>
              <p>No projects found with status: <strong>{filterStatus}</strong></p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;