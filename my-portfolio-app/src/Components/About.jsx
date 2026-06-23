import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about building modern web applications and creating
            responsive user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              MERN Stack Developer
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              I am a BCA student at IGNOU and a MERN Stack Developer with
              hands-on experience building full-stack web applications using
              React, Node.js, Express.js, MongoDB, and REST APIs.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently completing a 3-month internship where I work on
              real-world projects, focusing on responsive design, authentication,
              API integration, performance optimization, and deployment.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800">
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-indigo-400">
                  Education:
                </span>{" "}
                BCA (Pursuing) - IGNOU
              </li>

              <li>
                <span className="font-semibold text-indigo-400">
                  Experience:
                </span>{" "}
                3 Months Internship
              </li>

              <li>
                <span className="font-semibold text-indigo-400">
                  Technologies:
                </span>{" "}
                HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB
              </li>

              <li>
                <span className="font-semibold text-indigo-400">
                  Languages:
                </span>{" "}
                English, Hindi
              </li>

              <li>
                <span className="font-semibold text-indigo-400">
                  Interests:
                </span>{" "}
                Web Development, UI Design, Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}