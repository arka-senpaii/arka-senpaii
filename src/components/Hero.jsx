import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

const RaspberryPiModel = () => {
  const groupRef = useRef();
  
  // Load the model from the public folder
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

// Preload the model to prevent lag
useGLTF.preload('/raspberry_pi.glb');

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative pt-20">
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

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10 text-center pointer-events-none"
      >
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-4 tracking-wider">
          ARKA MAHAJAN
        </h1>
        <p className="text-xl md:text-2xl text-accent-purple uppercase tracking-[4px] font-medium">
          IoT Developer | AI Enthusiast
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
