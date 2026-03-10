import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 py-5 bg-background/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center relative">
        <div className="font-extrabold text-xl tracking-wider select-none">
          AM.
        </div>
        
        <div className="hidden md:flex gap-10">
          <a href="#about" className="text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors">About</a>
          <a href="#projects" className="text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors">Work</a>
          <a href="#timeline" className="text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors">Timeline</a>
          <a href="#contact" className="text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors">Contact</a>
        </div>

        <a href="mailto:arkamahajan@gmail.com" className="hidden lg:block text-sm text-white/60 hover:text-white transition-colors">
          arkamahajan@gmail.com
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
