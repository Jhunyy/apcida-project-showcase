import React from 'react';

/**
 * Team Component
 * Displays team members with their roles and skills
 * 
 * @param {object} props - Component props
 * @param {Array} props.teamMembers - Array of team member objects
 */
const Team = ({ teamMembers }) => {
  return (
    <section className="team-members" id="team">
      <div className="container">
        <div className="team-intro">
          <h2>Meet Our Team</h2>
          <p>
            We are a dedicated group of researchers and developers passionate about 
            mobile security and protecting users from digital threats.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="member" key={member.id}>
              <div className="member-photo">
                <img 
                  src={member.image} 
                  alt={`Photo of ${member.name}`}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                <div className="member-skills">
                  {member.skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;