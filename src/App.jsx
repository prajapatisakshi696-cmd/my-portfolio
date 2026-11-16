import React, { createContext, useState } from "react";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

// GSAP scroll animations (put the file in src/hooks/)
import useGsapAnimations from "./hooks/UseGsapAnimations";

// Theme Context (kept so Navbar's theme toggle keeps working)
export const ThemeContext = createContext({
  theme: "purple",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("purple");
  useGsapAnimations();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-screen bg-[#050510] font-sans text-white">
        {/* Scroll progress bar */}
        <div
          id="scroll-progress"
          aria-hidden="true"
          className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
        />

        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;