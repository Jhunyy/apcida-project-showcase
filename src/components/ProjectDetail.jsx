import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

/**
 * ProjectDetail Component
 * Displays detailed information about a single project
 * Uses useParams hook to get project ID from URL
 * 
 * @param {object} props - Component props
 * @param {Array} props.projects - Array of all projects
 * @param {Function} props.onUpdateStatus - Callback to update status
 * @param {Function} props.onUpdateProgress - Callback to update progress
 */
const ProjectDetail = ({ projects, onUpdateStatus, onUpdateProgress }) => {
  const { id } = useParams(); // Extract project ID from URL
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isEditing, setIsEditing] = useState(false);
  const [newProgress, setNewProgress] = useState(0);

  // Find the specific project by ID
  const project = projects.find(p => p.id === parseInt(id));

  // Handle case where project doesn't exist
  if (!project) {
    return (
      <section className="project-detail-section">
        <div className="container">
          <div className="error-message">
            <i className="fas fa-exclamation-triangle"></i>
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">
              <i className="fas fa-arrow-left"></i> Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /**
   * Handle progress update
   * Validates input and calls parent callback
   */
  const handleProgressUpdate = () => {
    if (newProgress >= 0 && newProgress <= 100) {
      onUpdateProgress(project.id, newProgress);
      setIsEditing(false);
    } else {
      alert('Progress must be between 0 and 100');
    }
  };

  /**
   * Get status color
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
    <section className="project-detail-section">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/projects">Projects</Link>
          <span className="separator">/</span>
          <span className="current">{project.title}</span>
        </div>

        {/* Project Detail Card */}
        <div className="project-detail-card">
          <div className="project-detail-header">
            <div className="header-content">
              <h1>{project.title}</h1>
              <span 
                className="status-badge-large" 
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status}
              </span>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/projects')}
            >
              <i className="fas fa-arrow-left"></i> Back to List
            </button>
          </div>

          <div className="project-detail-body">
            {/* Project Info Grid */}
            <div className="info-grid">
              <div className="info-item">
                <i className="fas fa-tag"></i>
                <div>
                  <span className="info-label">Category</span>
                  <span className="info-value">{project.category}</span>
                </div>
              </div>
              <div className="info-item">
                <i className="far fa-calendar"></i>
                <div>
                  <span className="info-label">Last Updated</span>
                  <span className="info-value">{project.lastUpdated}</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-chart-line"></i>
                <div>
                  <span className="info-label">Progress</span>
                  <span className="info-value">{project.progress}%</span>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="detail-section">
              <h3><i className="fas fa-file-alt"></i> Description</h3>
              <p>{project.description}</p>
            </div>

            {/* Progress Section with Edit Feature */}
            <div className="detail-section">
              <div className="section-header">
                <h3><i className="fas fa-tasks"></i> Progress Tracking</h3>
                <button 
                  className="btn btn-small"
                  onClick={() => {
                    setIsEditing(!isEditing);
                    setNewProgress(project.progress);
                  }}
                >
                  <i className={`fas fa-${isEditing ? 'times' : 'edit'}`}></i> 
                  {isEditing ? 'Cancel' : 'Edit Progress'}
                </button>
              </div>
              
              {isEditing ? (
                <div className="progress-edit">
                  <input 
                    type="number" 
                    min="0" 
                    max="100" 
                    value={newProgress}
                    onChange={(e) => setNewProgress(parseInt(e.target.value) || 0)}
                    className="progress-input"
                  />
                  <button 
                    className="btn btn-primary"
                    onClick={handleProgressUpdate}
                  >
                    <i className="fas fa-save"></i> Save Progress
                  </button>
                </div>
              ) : (
                <div className="progress-display">
                  <div className="progress-bar-large">
                    <div 
                      className="progress-fill-large" 
                      style={{ 
                        width: `${project.progress}%`,
                        backgroundColor: getStatusColor(project.status)
                      }}
                    >
                      <span className="progress-text">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Status Change Section */}
            <div className="detail-section">
              <h3><i className="fas fa-toggle-on"></i> Status Management</h3>
              <div className="status-buttons">
                {['Planning', 'In Progress', 'Completed', 'On Hold'].map(status => (
                  <button
                    key={status}
                    className={`status-btn ${project.status === status ? 'active' : ''}`}
                    onClick={() => onUpdateStatus(project.id, status)}
                    style={{
                      borderColor: getStatusColor(status),
                      backgroundColor: project.status === status ? getStatusColor(status) : 'transparent',
                      color: project.status === status ? '#fff' : getStatusColor(status)
                    }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Related Projects Section */}
            <div className="detail-section">
              <h3><i className="fas fa-link"></i> Related Projects</h3>
              <div className="related-projects">
                {projects
                  .filter(p => p.id !== project.id && p.category === project.category)
                  .slice(0, 3)
                  .map(relatedProject => (
                    <Link 
                      key={relatedProject.id}
                      to={`/project/${relatedProject.id}`}
                      className="related-project-card"
                    >
                      <h4>{relatedProject.title}</h4>
                      <span className="related-status">{relatedProject.status}</span>
                    </Link>
                  ))
                }
                {projects.filter(p => p.id !== project.id && p.category === project.category).length === 0 && (
                  <p className="no-related">No related projects found in this category.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;