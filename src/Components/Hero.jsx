import React, { useEffect, useState } from "react";

export default function Hero() {
  const phrases = ["Frontend Developer", "React Enthusiast", "Web Designer"];
  const [txt, setTxt] = useState("");
  const [pi, setPi] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTxt(phrases[pi].slice(0, char));
      setChar((c) => c + 1);

      if (char > phrases[pi].length) {
        setTimeout(() => {
          setChar(0);
          setPi((p) => (p + 1) % phrases.length);
        }, 800);
      }
    }, 80);

    return () => clearInterval(t);
  }, [char, pi]);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-950 text-white flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Sakshi
            </span>
          </h1>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
            {txt}
            <span className="ml-1 text-indigo-500 animate-pulse">|</span>
          </h3>

          <p className="text-gray-400 max-w-md">
            I build modern, responsive and user-friendly websites using
            React and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap pt-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-indigo-500
                         hover:bg-indigo-500 transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-500
                         hover:bg-indigo-600 transition duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 pt-4 text-gray-400">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-2xl opacity-30 animate-pulse"></div>

            <div className="relative w-64 h-64 rounded-2xl bg-gray-800 overflow-hidden shadow-xl">
              <img
                src="/profile.jpg"
                alt="profile"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
