import React from "react";

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
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg
                         hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {p.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full
                               bg-gray-800 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-4 py-2 text-sm rounded-lg
                             bg-indigo-500 hover:bg-indigo-600 transition"
                >
                  View
                </a>

                <a
                  href="#"
                  className="px-4 py-2 text-sm rounded-lg
                             border border-gray-600 hover:bg-gray-800 transition"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
