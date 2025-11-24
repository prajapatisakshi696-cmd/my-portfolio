import React, { createContext, useState } from "react";
import About from './Components/About';
import BackToTop from './Components/BackToTop';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import './App.css';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("purple");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Skills/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </ThemeContext.Provider>
  );
}

export default App;