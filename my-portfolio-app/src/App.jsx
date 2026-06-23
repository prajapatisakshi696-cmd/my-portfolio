import React, { createContext, useState } from "react";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

// Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("purple");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`min-h-screen font-sans ${
          theme === "purple" ? "text-white" : "text-white"
        }`}
      >
        <Navbar />

        <main className="pt-16">
          <Hero />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


// function App() {
//   return <h1>Portfolio Test</h1>;
// }

// export default App;