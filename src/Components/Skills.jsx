import React from "react";

import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.jpg";
import typescript from "../assets/typescript.jpg";
import reactImage from "../assets/react.jpg";
import nextjs from "../assets/nextjs.jpg";
import github from "../assets/github.jpg";
import tailwind from "../assets/tailwind.jpg";

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", color: "from-orange-400 to-orange-600" },
    { id: 2, src: css, title: "CSS", color: "from-blue-400 to-blue-600" },
    { id: 3, src: javascript, title: "JavaScript", color: "from-yellow-300 to-yellow-500" },
    { id: 4, src: typescript, title: "TypeScript", color: "from-blue-500 to-blue-700" },
    { id: 5, src: reactImage, title: "React", color: "from-cyan-400 to-blue-500" },
    { id: 6, src: tailwind, title: "Tailwind", color: "from-sky-400 to-teal-500" },
    { id: 7, src: nextjs, title: "Next JS", color: "from-gray-300 to-gray-500" },
    { id: 8, src: github, title: "GitHub", color: "from-gray-400 to-gray-600" },
  ];

  return (
    <section
  id="skills"
  className="scroll-mt-24 w-full min-h-screen bg-gradient-to-b from-gray-950 to-black text-white"
>
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
            Skills
          </h2>
          <p className="text-gray-400 mt-4">
            Technologies I work with & love building things in 💙
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {techs.map(({ id, src, title, color }) => (
            <div
              key={id}
              className="group relative rounded-xl p-[2px] bg-gradient-to-r hover:scale-105 transition duration-500"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-30 blur-lg group-hover:opacity-70 transition`} />

              <div className="relative bg-gray-900 rounded-xl p-6 flex flex-col items-center">
                <img
                  src={src}
                  alt={title}
                  className="w-16 mb-4 group-hover:rotate-6 transition duration-500"
                />
                <p className="text-lg font-semibold">{title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
