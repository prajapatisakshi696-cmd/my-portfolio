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
      <div className="relative isolate min-h-screen bg-[#050510] font-sans text-white">
        {/* One shared purple glow canvas behind every section */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 85% 0%, rgba(124,58,237,0.38), transparent 60%), radial-gradient(ellipse 50% 45% at 0% 45%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(ellipse 60% 45% at 100% 85%, rgba(217,70,239,0.2), transparent 60%)",
          }}
        />
        {/* Scroll progress bar */}
        <div
          id="scroll-progress"
          aria-hidden="true"
          className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
        />

        <Navbar />

        <main className="relative z-10">
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