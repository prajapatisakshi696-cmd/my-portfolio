import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 92 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-info">
                <p>{s.name}</p>
                <span>{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: s.level + '%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}