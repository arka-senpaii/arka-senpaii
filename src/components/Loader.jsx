import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';

const loaderTitle = 'ARKA MAHAJAN';

const Loader = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const lettersRef = useRef(null);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 2;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [isLoading, onLoadingComplete]);

  useEffect(() => {
    if (!isLoading || !lettersRef.current) return;

    anime({
      targets: lettersRef.current.querySelectorAll('.loader-letter'),
      translateY: [-20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 900,
      delay: anime.stagger(60, { start: 200 }),
    });
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent-purple/5 blur-[150px] pointer-events-none" />
          <div className="relative flex flex-col items-center w-full max-w-sm px-8">
            <div
              ref={lettersRef}
              className="text-white/60 font-bold uppercase tracking-[0.5em] text-sm mb-8"
            >
              {loaderTitle.split('').map((char, i) => (
                <span
                  key={i}
                  className="loader-letter inline-block"
                  style={{ opacity: 0 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent-purple shadow-[0_0_15px_rgba(167,139,250,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between w-full text-xs text-white/40 tracking-wider">
              <span>SYSTEM.BOOT</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
