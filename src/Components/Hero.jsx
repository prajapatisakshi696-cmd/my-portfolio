import React, { useEffect, useState } from "react";
import "./Hero.css";

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
    // eslint-disable-next-line
  }, [char, pi]);

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1>
            Hello, I'm <span className="accent">Sakshi</span>
          </h1>
          <h3 className="typing">{txt}<span className="cursor">|</span></h3>
          <p className="hero-sub">
            I build modern responsive websites using React and clean CSS.
          </p>

          <div className="hero-actions">
            <a href="/resume.pdf" download className="btn outline">
              Download Resume
            </a>
            <a href="#projects" className="btn">
              View Projects
            </a>
          </div>

          <div className="socials">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <img src="/profile.jpg" alt="profile" onError={(e)=>{e.target.style.display='none'}}/>
          </div>
        </div>
      </div>
    </section>
  );
}