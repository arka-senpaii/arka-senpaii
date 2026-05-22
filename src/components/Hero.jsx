import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, useGLTF } from '@react-three/drei';
import anime from 'animejs/lib/anime.es.js';

const RaspberryPiModel = () => {
  const groupRef = useRef();
  const { scene } = useGLTF('/raspberry_pi.glb');
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(groupRef.current) {
        groupRef.current.rotation.y = Math.sin(t / 2) * 0.5;
        groupRef.current.rotation.x = Math.sin(t / 3) * 0.2 + 0.5;
        groupRef.current.rotation.z = Math.sin(t / 4) * 0.1;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={0.5}>
        <primitive object={scene} />
      </group>
    </Float>
  );
};
useGLTF.preload('/raspberry_pi.glb');

const heroTitle = 'ARKA MAHAJAN';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = sectionRef.current;
    if (!ctx) return;

    // Cinematic stagger reveal for hero title letters (deep rise + subtle scale)
    anime({
      targets: ctx.querySelectorAll('.hero-letter'),
      translateY: [80, 0],
      scale: [0.8, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1600,
      delay: anime.stagger(60, { start: 400 }),
    });

    // Fade in subtitle
    anime({
      targets: ctx.querySelector('#hero-subtitle'),
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: 1100,
    });

    // Scale-in CTA buttons with elastic spring feel
    anime({
      targets: ctx.querySelectorAll('#hero-resume-btn, #hero-projects-btn'),
      scale: [0.6, 1],
      opacity: [0, 1],
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(150, { start: 1400 }),
    });

    // Fade in scroll indicator
    anime({
      targets: ctx.querySelector('#scroll-indicator'),
      opacity: [0, 0.6],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 2000,
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center relative pt-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <RaspberryPiModel />
          </Suspense>
        </Canvas>
      </div>

      <div className="z-10 text-center pointer-events-none">
        <h1 className="text-[clamp(1.25rem,4.2vw,4.5rem)] font-extrabold leading-none tracking-tighter text-gray-900 dark:text-white whitespace-nowrap mb-4 tracking-wider transition-colors duration-700 select-none">
          {heroTitle.split('').map((char, i) => (
            <span
              key={i}
              className="hero-letter inline-block transform origin-bottom"
              style={{ opacity: 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-accent-blue dark:text-accent-purple uppercase tracking-[6px] font-medium transition-colors duration-700 mb-10"
          style={{ opacity: 0 }}
        >
          AI & IoT Engineer | Full-Stack Developer
        </p>
        
        <div className="flex flex-row items-center justify-center gap-6">
          <a
            href="/Arka_Mahajan_CV.pdf"
            download="Arka_Mahajan_CV.pdf"
            id="hero-resume-btn"
            className="pointer-events-auto rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-bold border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
            style={{ opacity: 0, transform: 'scale(0.6)' }}
          >
            Resume
          </a>
          <a
            href="#projects"
            id="hero-projects-btn"
            className="pointer-events-auto rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-bold border border-accent-purple/40 bg-accent-purple/20 backdrop-blur-md text-white hover:bg-accent-purple/30 hover:border-accent-purple/60 transition-all duration-300 shadow-[0_0_20px_rgba(167,139,250,0.1)]"
            style={{ opacity: 0, transform: 'scale(0.6)' }}
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        id="scroll-indicator" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 pointer-events-none"
        style={{ transform: 'translateY(20px)' }}
      >
        <span className="text-[10px] uppercase tracking-[4px] text-white/40">Scroll Down</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-accent-purple rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
