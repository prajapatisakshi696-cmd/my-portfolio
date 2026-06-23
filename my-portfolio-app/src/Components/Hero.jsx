import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const phrases = [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.substring(0, text.length + 1));

          if (text === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setText(currentPhrase.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-indigo-400 font-medium mb-3">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Sakshi Prajapati
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mt-6 h-10">
            {text}
            <span className="text-indigo-500 animate-pulse">|</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mt-6">
            MERN Stack Developer with hands-on experience building responsive
            web applications using React, Node.js, Express.js, and MongoDB.
            Passionate about creating clean user interfaces, solving problems,
            and developing scalable full-stack solutions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400">10+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-400">3 Months</h3>
              <p className="text-gray-400 text-sm">Internship</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-400">MERN</h3>
              <p className="text-gray-400 text-sm">Stack</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/sakshi_resume.pdf"
              download
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition duration-300 font-medium"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-indigo-500 hover:text-indigo-400 transition duration-300 font-medium"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 text-2xl">
            <a
              href="https://github.com/prajapatisakshi696-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sakshi-rodhia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>

            {/* Profile Image */}
            <img
              src="/profile.jpg"
              alt="Sakshi Prajapati"
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-indigo-500 shadow-2xl"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
