import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Todo App",
      desc: "A task manager with add/edit/delete features using React hooks.",
      tech: ["React", "Hooks", "CSS"],
    },
    {
      title: "Weather App",
      desc: "Shows weather using a public API with search functionality.",
      tech: ["React", "Fetch API"],
    },
    {
      title: "Calculator",
      desc: "Simple calculator built with JavaScript and styled components.",
      tech: ["JS", "HTML", "CSS"],
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="tech">{p.tech.join(" • ")}</p>
              <div className="card-actions">
                <a href="#" className="btn small">View</a>
                <a href="#" className="btn outline small">Code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}