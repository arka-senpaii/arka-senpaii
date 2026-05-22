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

    // Stagger reveal for hero title letters
    anime({
      targets: ctx.querySelectorAll('.hero-letter'),
      translateY: [40, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: anime.stagger(50, { start: 300 }),
    });

    // Fade in subtitle after title
    anime({
      targets: ctx.querySelector('#hero-subtitle'),
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 1000,
    });

    // Scale-in buttons
    anime({
      targets: ctx.querySelectorAll('#hero-resume-btn, #hero-projects-btn'),
      scale: [0, 1],
      opacity: [0, 1],
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(120, { start: 1300 }),
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center relative pt-20 px-6 md:px-12">
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
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-none tracking-tighter text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-white/40 mb-4 tracking-wider transition-colors duration-700">
          {heroTitle.split('').map((char, i) => (
            <span
              key={i}
              className="hero-letter inline-block"
              style={{ opacity: 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-accent-blue dark:text-accent-purple uppercase tracking-[4px] font-medium transition-colors duration-700"
          style={{ opacity: 0 }}
        >
          AI & IoT Engineer | Full-Stack Developer
        </p>
        <div className="flex flex-row items-center justify-center gap-6 mt-8">
          <a
            href="/Arka_Mahajan_CV.pdf"
            download
            id="hero-resume-btn"
            className="pointer-events-auto rounded-full px-8 py-3 text-sm uppercase tracking-widest font-medium border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-colors duration-300"
            style={{ opacity: 0, transform: 'scale(0)' }}
          >
            Resume
          </a>
          <a
            href="#projects"
            id="hero-projects-btn"
            className="pointer-events-auto rounded-full px-8 py-3 text-sm uppercase tracking-widest font-medium border border-accent-purple/40 bg-accent-purple/20 backdrop-blur-md text-white hover:bg-accent-purple/30 transition-colors duration-300"
            style={{ opacity: 0, transform: 'scale(0)' }}
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
