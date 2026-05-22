import React, { useRef, useEffect } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';

const Sidebars = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animate left sidebar icons sliding up
    if (leftRef.current) {
      anime({
        targets: leftRef.current.querySelectorAll('a'),
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(150, { start: 1200 })
      });
    }
    // Animate right sidebar (resume link) sliding in
    if (rightRef.current) {
      anime({
        targets: rightRef.current.querySelector('a'),
        translateX: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 1500
      });
    }
  }, []);

  return (
    <>
      <aside ref={leftRef} className="fixed left-10 bottom-10 z-50 hidden xl:flex flex-col gap-6 text-white/50">
        <a href="https://github.com/arka-senpaii" target="_blank" rel="noreferrer" className="hover:text-accent-purple hover:-translate-y-1 transition-all duration-300" style={{ opacity: 0 }}>
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/arkamahajan" target="_blank" rel="noreferrer" className="hover:text-accent-purple hover:-translate-y-1 transition-all duration-300" style={{ opacity: 0 }}>
          <Linkedin size={22} />
        </a>
      </aside>

      <aside ref={rightRef} className="fixed right-10 bottom-10 z-50 hidden xl:flex origin-bottom-right rotate-90">
        <a 
          href="/Arka_Mahajan_CV.pdf" 
          download="Arka_Mahajan_CV.pdf"
          className="flex items-center gap-3 text-white/50 hover:text-accent-purple transition-colors text-xs tracking-[4px] uppercase"
          style={{ opacity: 0 }}
        >
          Resume <FileText size={16} className="-rotate-90" />
        </a>
      </aside>
    </>
  );
};

export default Sidebars;
