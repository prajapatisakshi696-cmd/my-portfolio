import react from 'react';
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

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    <BackToTop/>
    </>
  );
}

export default App;