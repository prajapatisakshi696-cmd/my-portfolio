import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
 
const GITHUB_URL = "https://github.com/prajapatisakshi696-cmd";
const LINKEDIN_URL = "https://www.linkedin.com/in/sakshi-rodhia";
 
const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="border-t border-purple-500/20 bg-[#050510] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 items-center">
        {/* Identity */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Sakshi Prajapati
          </p>
          <p className="mt-1 text-sm">Full Stack Web Developer</p>
        </div>
 
        {/* Quick links */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
        >
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="transition hover:text-white focus:outline-none focus-visible:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
 
        {/* Social */}
        <div className="flex justify-center md:justify-end gap-5 text-2xl">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition hover:text-white focus:outline-none focus-visible:text-white"
          >
            <FaGithub />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition hover:text-purple-400 focus:outline-none focus-visible:text-purple-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
 
      <div className="border-t border-white/5 py-4 text-center text-xs text-gray-500">
        © {currentYear} Sakshi Prajapati. All rights reserved.
      </div>
    </footer>
  );
}