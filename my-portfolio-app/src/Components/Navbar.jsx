import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h3
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold text-white cursor-pointer"
        >
          Sakshi
        </h3>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          {["hero", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-white transition capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setTheme("purple")}
            title="Purple Theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center
              transition
              ${theme === "purple"
              ? "bg-purple-500 text-white scale-110"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
          >
            💜
          </button>
          <button
            onClick={() => setTheme("blue")}
            title="Blue Theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center
              transition
              ${theme === "blue"
              ? "bg-blue-500 text-white scale-110"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
          >
            💙
          </button>
        </div>
      </div>
    </header>
  );
}
