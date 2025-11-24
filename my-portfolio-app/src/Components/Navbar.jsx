import React, { useContext } from "react";
import { ThemeContext } from "../App"; 
import "./Navbar.css";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="navbar">
      <div className="nav-left">
        <h3 className="logo">Sakshi</h3>
      </div>

      <nav className="nav-links">
        <button onClick={() => scrollTo("hero")}>Home</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("skills")}>Skills</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </nav>

      <div className="nav-right">
        <div className="theme-toggle">
          <button
            className={`small-btn ${theme === "purple" ? "active" : ""}`}
            onClick={() => setTheme("purple")}
            title="Purple Theme"
          >
            💜
          </button>
          <button
            className={`small-btn ${theme === "blue" ? "active" : ""}`}
            onClick={() => setTheme("blue")}
            title="Blue Theme"
          >
            💙
          </button>
        </div>
      </div>
    </header>
  );
}
