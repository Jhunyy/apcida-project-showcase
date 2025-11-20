import React from 'react';

const fallbackMembers = [
  {
    name: 'Jhunren Apiag',
    role: 'Lead Researcher',
    img: '/jhunren.jpg',
    bio: "Focuses on building and testing the core smishing detection feature and the keyword-based algorithm.",
    skills: ['Python', 'Prototyping', 'UI/UX Design']
  },
  {
    name: 'Gio Patrick Cimeni',
    role: 'Data Analyst',
    img: '/gio.jpg',
    bio: 'Leads data collection, curates scam keywords, and evaluates detection performance.',
    skills: ['Data Analysis', 'Statistics', 'R', 'Tableau']
  },
  {
    name: 'Edison Dasok',
    role: 'UI/UX Designer',
    img: '/edison.jpg',
    bio: 'Designs clear, accessible interfaces and alert flows for all user demographics.',
    skills: ['UI Design', 'UX Research', 'Figma',]
  }
];

const TeamSection = ({ members = fallbackMembers }) => {
  return (
    <section id="team" className="team-members">
      <div className="container">
        <div className="intro-content" style={{ textAlign: 'center', marginBottom: 30 }}>
          <h2>Meet the Researchers</h2>
          <p>
            A multidisciplinary team combining cybersecurity, data science, and user-centered design to keep users safe from smishing.
          </p>
        </div>

        <div className="team-grid">
          {members.map((m, idx) => (
            <article className="member" key={idx}>
              <div className="member-photo">
                <img
                  src={m.img}
                  alt={m.name}
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMyMjIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSIxNiI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <div className="member-info">
                <h3>{m.name}</h3>
                <p className="member-role">{m.role}</p>
                <p className="member-bio">{m.bio}</p>
                <div className="member-skills">
                  {m.skills.map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;