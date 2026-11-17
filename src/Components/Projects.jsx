import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";

const GITHUB_PROFILE = "https://github.com/prajapatisakshi696-cmd";

// Put screenshots in /public/projects/ using these names (a gradient shows if missing).
const PROJECTS = [
  {
    title: "Memories – Image Sharing App",
    desc: "Full-stack social app with secure login, image uploads, likes and comments.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/memories.png",
    github: "https://github.com/prajapatisakshi696-cmd/Memories",
    live: "https://memories-13ld.vercel.app",
  },
  // {
  //   title: "Shopping Cart Application",
  //   desc: "E-commerce cart with product listing, quantity updates, and a responsive interface.",
  //   tags: ["React.js", "Tailwind CSS"],
  //   image: "/projects/shopping-cart.png",
  //   github: "https://github.com/prajapatisakshi696-cmd/shoppingcart-",
  //   live: "https://shoppingcart-kappa-mocha.vercel.app/",
  // },
  // {
  //   title: "Travel Package Explorer",
  //   desc: "Explore destinations and view package details in an interactive, responsive layout.",
  //   tags: ["React.js", "Responsive UI"],
  //   image: "/projects/travel-explorer.png",
  //   github: "https://github.com/prajapatisakshi696-cmd/travel-package-explorer",
  //   live: "https://travel-package-explorer.vercel.app/",
  // },
  
  // {
  //   title: "Fetch User Using API",
  //   desc: "React app that fetches user data from an API and renders it dynamically.",
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
        className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-violet-900/70 via-[#100B20] to-fuchsia-900/50 px-4 text-center font-semibold text-purple-200"
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
      width="480"
      height="270"
      onError={() => setFailed(true)}
      className="h-40 w-full object-cover object-top transition duration-500 group-hover:scale-105"
    />
  );
}

export default function Projects() {
  const visibleProjects = PROJECTS.slice(0, 4);

  const gridColumns = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 xl:grid-cols-3",
    4: "sm:grid-cols-2 xl:grid-cols-4",
  };

  const columnsClass = gridColumns[visibleProjects.length] || gridColumns[4];
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-500/10 to-white/[0.03] p-8 shadow-[0_0_50px_-12px_rgba(124,58,237,0.5)] backdrop-blur-xl md:p-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
                <FaBriefcase aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-bold md:text-3xl">My Projects</h2>
            </div>
            {PROJECTS.length > 4 && (
  <a
    href={`${GITHUB_PROFILE}?tab=repositories`}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition hover:text-white"
  >
    View All Projects
    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
  </a>
)}
          </div>

          <div className={`grid grid-cols-1 gap-5 ${columnsClass}`}>
  {visibleProjects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-[#100B20]/60 transition duration-300 hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-600/30"
              >
                <div className="overflow-hidden">
                  <Thumbnail src={p.image} title={p.title} />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{p.desc}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs text-purple-300"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-2 text-sm font-medium transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-purple-500/40 px-3 py-2 text-sm font-medium transition hover:border-purple-300 hover:text-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
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
      </div>
    </section>
  );
}