import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Put screenshots in /public/projects/ using these file names.
// If an image is missing, a gradient placeholder is shown instead.
const PROJECTS = [
   {
    title: "Memories – Image Sharing App",
    desc: "A full-stack social app with secure login, image uploads, and posts that users can like and comment on.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: "/projects/memories.png",
    github: "https://github.com/prajapatisakshi696-cmd/Memories",
    live: "https://memories-13ld.vercel.app",
  },
  {
    title: "Shopping Cart Application",
    desc: "An e-commerce shopping cart with product listing, cart management, quantity updates, and a responsive interface.",
    tags: ["React.js", "Tailwind CSS"],
    image: "/projects/shopping-cart.png",
    github: "https://github.com/prajapatisakshi696-cmd/shoppingcart-",
    live: "https://shoppingcart-kappa-mocha.vercel.app/",
  },
  // {
  //   title: "Travel Package Explorer",
  //   desc: "A responsive travel interface where users explore destinations and view package details through an interactive layout.",
  //   tags: ["React.js", "Responsive UI"],
  //   image: "/projects/travel-explorer.png",
  //   github: "https://github.com/prajapatisakshi696-cmd/travel-package-explorer",
  //   live: "https://travel-package-explorer.vercel.app/",
  // },
 
  // {
  //   title: "Fetch User Using API",
  //   desc: "A React app that fetches user data from an API and renders it dynamically in a clean interface.",
  //   tags: ["React.js", "REST API"],
  //   image: "/projects/fetch-user.png",
  //   github: "https://github.com/prajapatisakshi696-cmd/fetch-user-using-api",
  //   live: "https://fetch-user-using-api.vercel.app/",
  // },
];

function Thumbnail({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${title} preview`}
        className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-violet-900/60 via-[#100B20] to-fuchsia-900/40 px-6 text-center text-lg font-semibold text-purple-200"
      >
        {title}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${title} screenshot`}
      loading="lazy"
      width="640"
      height="360"
      onError={() => setFailed(true)}
      className="h-48 w-full object-cover object-top transition duration-500 group-hover:scale-105"
    />
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#050510] py-20 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur shadow-lg shadow-purple-950/40 transition duration-300 hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-purple-600/30"
            >
              <div className="overflow-hidden">
                <Thumbnail src={p.image} title={p.title} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>

                <p className="mt-3 flex-1 leading-relaxed text-gray-400">
                  {p.desc}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-purple-500/40 px-4 py-2 text-sm font-medium transition hover:border-purple-300 hover:text-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}