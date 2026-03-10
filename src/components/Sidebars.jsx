import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Sidebars = () => {
  return (
    <>
      <aside className="fixed left-10 bottom-10 z-50 hidden xl:flex flex-col gap-6 text-white/50">
        <a href="https://github.com/arka-senpaii" target="_blank" rel="noreferrer" className="hover:text-accent-purple hover:-translate-y-1 transition-all duration-300">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/arkamahajan" target="_blank" rel="noreferrer" className="hover:text-accent-purple hover:-translate-y-1 transition-all duration-300">
          <Linkedin size={22} />
        </a>
      </aside>

      <aside className="fixed right-10 bottom-10 z-50 hidden xl:flex origin-bottom-right rotate-90">
        <a href="/Arka Mahajan   CV.pdf" target="_blank" className="flex items-center gap-3 text-white/50 hover:text-accent-purple transition-colors text-xs tracking-[4px] uppercase">
          Resume <FileText size={16} className="-rotate-90" />
        </a>
      </aside>
    </>
  );
};

export default Sidebars;
