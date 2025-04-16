import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans scroll-smooth transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;