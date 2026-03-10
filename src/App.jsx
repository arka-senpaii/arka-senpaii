import React from 'react';
import Navigation from './components/Navigation';
import Sidebars from './components/Sidebars';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 z-[-2] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px]" />
      </div>

      <Navigation />
      <Sidebars />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
        <Hero />
        <About />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
    </div>
  );
}

export default App;
