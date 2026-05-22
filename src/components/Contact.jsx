import React, { useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Mail, Phone, Linkedin, Globe, Github } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const headingText = "Let's connect";

  const containerRef = useScrollReveal((el, anime) => {
    // Cinematic stagger reveal of the title letters
    anime({
      targets: el.querySelectorAll('.contact-letter'),
      translateY: [40, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(40),
    });

    // Animate contact methods stagger
    anime({
      targets: el.querySelectorAll('.contact-method'),
      translateY: [30, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(150, { start: 400 }),
    });

    // Stagger slide-in social links
    anime({
      targets: el.querySelectorAll('.social-link'),
      scale: [0.8, 1],
      opacity: [0, 1],
      easing: 'spring(1, 80, 12, 0)',
      delay: anime.stagger(100, { start: 700 }),
    });
  }, { threshold: 0.15 });

  const handleRipple = (e) => {
    const target = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(167, 139, 250, 0.2)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '0';
    target.style.position = 'relative';
    target.style.overflow = 'hidden';
    target.appendChild(ripple);

    anime({
      targets: ripple,
      scale: [0, 2.5],
      opacity: [1, 0],
      easing: 'easeOutExpo',
      duration: 800,
      complete: () => ripple.remove(),
    });
  };

  return (
    <footer ref={containerRef} id="contact" className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-center border-t border-white/5 mt-20 relative">
      <div className="absolute left-1/2 -top-[1px] -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-50" />
      
      <div>
        <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold mb-16 tracking-tighter">
          {headingText.split('').map((char, i) => (
            <span
              key={i}
              className="contact-letter inline-block opacity-0"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          <a
            href="mailto:arkamahajan@gmail.com"
            className="contact-method opacity-0 group flex items-center gap-4 text-xl md:text-2xl text-white/80 hover:text-white transition-colors relative overflow-hidden px-4 py-2 rounded-xl"
            onMouseEnter={handleRipple}
          >
            <Mail className="group-hover:text-accent-purple transition-colors relative z-10" />
            <span className="relative overflow-hidden z-10">
              arkamahajan@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </span>
          </a>

          <a
            href="tel:+917047387377"
            className="contact-method opacity-0 group flex items-center gap-4 text-xl md:text-2xl text-white/80 hover:text-white transition-colors relative overflow-hidden px-4 py-2 rounded-xl"
            onMouseEnter={handleRipple}
          >
            <Phone className="group-hover:text-accent-purple transition-colors relative z-10" />
            <span className="relative overflow-hidden z-10">
              +91 7047387377
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-24">
          <a
            href="https://www.linkedin.com/in/arkamahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link opacity-0 group p-3 rounded-full border border-white/10 hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
            onMouseEnter={handleRipple}
          >
            <Linkedin className="w-5 h-5 text-white/60 group-hover:text-accent-purple transition-colors" />
          </a>
          <a
            href="https://github.com/arka-senpaii"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link opacity-0 group p-3 rounded-full border border-white/10 hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
            onMouseEnter={handleRipple}
          >
            <Github className="w-5 h-5 text-white/60 group-hover:text-accent-purple transition-colors" />
          </a>
          <a
            href="https://www.arkamahajan.in"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link opacity-0 group p-3 rounded-full border border-white/10 hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
            onMouseEnter={handleRipple}
          >
            <Globe className="w-5 h-5 text-white/60 group-hover:text-accent-purple transition-colors" />
          </a>
        </div>

        <p className="text-white/40 text-sm tracking-widest uppercase">
          © 2026 Arka Mahajan. Built with React & Three.js.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
