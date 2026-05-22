import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Stagger animate nav links
    anime({
      targets: navRef.current?.querySelectorAll('.nav-link'),
      translateY: [-15, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(80, { start: 600 })
    });

    // Animate the logo
    anime({
      targets: '.nav-logo',
      scale: [0.8, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 300
    });
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 w-full z-50 py-4 md:py-5 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center relative">
          <div className="nav-logo font-extrabold text-xl tracking-wider select-none" style={{ opacity: 0 }}>
            AM.
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="nav-link text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors" style={{ opacity: 0 }}>About</a>
            <a href="#projects" className="nav-link text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors" style={{ opacity: 0 }}>Work</a>
            <a href="#timeline" className="nav-link text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors" style={{ opacity: 0 }}>Timeline</a>
            <a href="#contact" className="nav-link text-sm uppercase tracking-[2px] font-medium text-white/80 hover:text-accent-purple transition-colors" style={{ opacity: 0 }}>Contact</a>
            <a 
              href="/Arka_Mahajan_CV.pdf" 
              download="Arka_Mahajan_CV.pdf"
              className="nav-link flex items-center gap-2 text-sm uppercase tracking-[2px] font-medium px-4 py-2 rounded-full border border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10 hover:border-accent-purple/60 transition-all duration-300"
              style={{ opacity: 0 }}
              id="nav-resume-btn"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          <a href="mailto:arkamahajan@gmail.com" className="nav-link hidden lg:block text-sm text-white/60 hover:text-white transition-colors" style={{ opacity: 0 }}>
            arkamahajan@gmail.com
          </a>

          <button 
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden pt-20"
          >
            <a href="#about" onClick={toggleMenu} className="text-2xl uppercase tracking-[4px] font-medium text-white/80 hover:text-accent-purple transition-colors">About</a>
            <a href="#projects" onClick={toggleMenu} className="text-2xl uppercase tracking-[4px] font-medium text-white/80 hover:text-accent-purple transition-colors">Work</a>
            <a href="#timeline" onClick={toggleMenu} className="text-2xl uppercase tracking-[4px] font-medium text-white/80 hover:text-accent-purple transition-colors">Timeline</a>
            <a href="#contact" onClick={toggleMenu} className="text-2xl uppercase tracking-[4px] font-medium text-white/80 hover:text-accent-purple transition-colors">Contact</a>
            <a 
              href="/Arka_Mahajan_CV.pdf" 
              download="Arka_Mahajan_CV.pdf"
              onClick={toggleMenu}
              className="mt-4 flex items-center gap-3 text-xl uppercase tracking-[4px] font-medium text-accent-purple hover:text-white transition-colors"
            >
              <FileText size={20} />
              Resume
            </a>
            <a href="mailto:arkamahajan@gmail.com" onClick={toggleMenu} className="mt-8 text-lg text-white/60 hover:text-white transition-colors">
              arkamahajan@gmail.com
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
