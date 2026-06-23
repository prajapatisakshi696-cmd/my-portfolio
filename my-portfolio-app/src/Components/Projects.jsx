import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Shopping Cart Website",
      desc: "A modern e-commerce shopping cart application with product listing, cart management, quantity updates, and a responsive user interface.",
      github: "https://github.com/prajapatisakshi696-cmd/shoppingcart-",
      live: "https://shoppingcart-kappa-mocha.vercel.app/",
    },
      {
    title: "Travel Package Explorer",
    desc: "A responsive travel booking interface where users can explore travel destinations, view package details, and discover curated travel experiences through a modern and user-friendly design.",
    github: "https://github.com/prajapatisakshi696-cmd/travel-package-explorer",
    live: "https://travel-package-explorer.vercel.app/",
  },
      {
    title: "fetch-user-using-api",
    desc: "A React application that fetches user data from an API and displays it in a user-friendly interface, demonstrating API integration and dynamic data rendering.",
    github: "https://github.com/prajapatisakshi696-cmd/fetch-user-using-api",
    live: "https://fetch-user-using-api.vercel.app/",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:border-indigo-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}