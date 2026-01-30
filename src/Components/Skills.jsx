import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'C/C++', level: 'Intermediate' },
  { name: 'Java', level: 'Beginner' },
  { name: 'MySQL', level: 'Beginner' },
  { name: 'Git & GitHub', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">💡 My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p className={`level ${skill.level.toLowerCase()}`}>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;