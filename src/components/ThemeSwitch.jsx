import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

const Lamp = ({ isLightMode }) => {
  const plugRef = useRef();
  const bulbRef = useRef();
  const tubeRef = useRef();
  const chainRef = useRef();

  // Animation values for chain pull
  const chainPullY = useRef(0);
  const targetChainPullY = useRef(0);

  // Target positions/states
  const targetPlugPos = isLightMode ? new THREE.Vector3(0.25, -0.45, 0.15) : new THREE.Vector3(0.8, -0.8, 0.5);
  const targetEmissive = isLightMode ? 2.5 : 0;
  
  // Wire curve setup
  const curve = useMemo(() => new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0, -0.4, 0),
    new THREE.Vector3(0.4, -1, 0.25),
    new THREE.Vector3(0.8, -0.8, 0.5)
  ), []);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Trigger chain pull animation whenever the theme is toggled
    targetChainPullY.current = -0.2;
  }, [isLightMode]);

  useFrame((state, delta) => {
    if (!plugRef.current || !bulbRef.current || !tubeRef.current || !chainRef.current) return;
    
    // Lerp plug position
    plugRef.current.position.lerp(targetPlugPos, delta * 6);
    
    // Rotate plug
    const targetRotX = isLightMode ? 0 : Math.PI / 2;
    plugRef.current.rotation.x = THREE.MathUtils.lerp(plugRef.current.rotation.x, targetRotX, delta * 6);
    
    // Lerp bulb emissive glow
    bulbRef.current.emissiveIntensity = THREE.MathUtils.lerp(bulbRef.current.emissiveIntensity, targetEmissive, delta * 8);
    
    // Lerp pull chain spring-back physics
    chainPullY.current = THREE.MathUtils.lerp(chainPullY.current, targetChainPullY.current, delta * 15);
    if (Math.abs(chainPullY.current - targetChainPullY.current) < 0.001) {
      targetChainPullY.current = 0; // Spring back
    }
    chainRef.current.position.y = -0.05 + chainPullY.current;

    // Update wire geometry
    const dist = plugRef.current.position.distanceTo(targetPlugPos);
    if (dist > 0.001) {
      const start = new THREE.Vector3(0, -0.4, 0);
      const end = plugRef.current.position;
      const mid = new THREE.Vector3((start.x + end.x) / 2, Math.min(start.y, end.y) - 0.4, (start.z + end.z) / 2);
      
      curve.v0.copy(start);
      curve.v1.copy(mid);
      curve.v2.copy(end);
      
      tubeRef.current.geometry.dispose();
      tubeRef.current.geometry = new THREE.TubeGeometry(curve, 20, 0.015, 8, false);
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Base */}
      <mesh 
        position={[0, -0.5, 0]} 
        castShadow 
        receiveShadow
      >
        <cylinderGeometry args={[0.4, 0.45, 0.1, 32]} />
        <meshStandardMaterial 
          color={isLightMode ? "#1a1a1a" : "#ffffff"} 
          emissive={isLightMode ? "#000000" : "#333333"} 
          roughness={0.7} 
          metalness={0.2} 
        />
      </mesh>

      {/* Arm */}
      <mesh 
        position={[-0.15, 0.2, 0]} 
        rotation={[0, 0, -Math.PI / 6]} 
        castShadow
      >
        <cylinderGeometry args={[0.04, 0.04, 1.4]} />
        <meshStandardMaterial 
          color={isLightMode ? "#111111" : "#ffffff"} 
          emissive={isLightMode ? "#000000" : "#333333"} 
          roughness={0.4} 
          metalness={0.8} 
        />
      </mesh>

      {/* Head / Cone shade */}
      <mesh 
        position={[-0.45, 0.75, 0]} 
        rotation={[0, 0, Math.PI / 4]} 
        castShadow
      >
        <coneGeometry args={[0.25, 0.4, 32]} />
        <meshStandardMaterial 
          color={isLightMode ? "#2d2d2d" : "#ffffff"} 
          emissive={isLightMode ? "#000000" : "#333333"} 
          roughness={0.3} 
          metalness={0.5} 
        />
      </mesh>

      {/* Bulb inside the head */}
      <mesh 
        position={[-0.45, 0.6, 0]} 
        ref={bulbRef}
      >
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffeeaa" 
          emissiveIntensity={0} 
          toneMapped={false} 
        />
        {isLightMode && <pointLight position={[0, 0, 0]} intensity={2.0} distance={4} color="#ffeeaa" castShadow />}
      </mesh>

      {/* Socket block on base */}
      <mesh 
        position={[0.25, -0.45, 0]} 
        castShadow
      >
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial 
          color={isLightMode ? "#222" : "#ffffff"} 
          emissive={isLightMode ? "#000000" : "#333333"} 
          metalness={0.6} 
        />
      </mesh>
      
      {/* Socket hole */}
      <mesh 
        position={[0.25, -0.45, 0.08]}
      >
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#000" />
      </mesh>

      {/* Pull Chain Switch (Interactive Switch) */}
      <group 
        ref={chainRef} 
        position={[-0.35, -0.05, 0.05]} 
      >
        {/* Chain string */}
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.005, 0.005, 0.4]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Chain handle sphere */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Plug (Interactive Component) */}
      <group 
        ref={plugRef} 
        position={[0.8, -0.8, 0.5]} 
      >
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.08, 0.12]} />
          <meshStandardMaterial 
            color={isLightMode ? "#333" : "#ffffff"} 
            emissive={isLightMode ? "#000000" : "#333333"} 
            metalness={0.7} 
          />
        </mesh>
        {/* Plug Pin */}
        <mesh position={[0, 0, 0.06]} rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.06]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} />
        </mesh>
      </group>

      {/* Wire from base to plug */}
      <mesh ref={tubeRef} castShadow>
        <tubeGeometry args={[curve, 20, 0.015, 8, false]} />
        <meshStandardMaterial 
          color={isLightMode ? "#111" : "#ffffff"} 
          emissive={isLightMode ? "#000000" : "#333333"} 
          roughness={0.9} 
        />
      </mesh>
    </group>
  );
};

export default function ThemeSwitch() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!document.documentElement.classList.contains('dark') && !document.documentElement.classList.contains('light')) {
       document.documentElement.classList.add('dark');
    }
    if (!document.documentElement.classList.contains('dark')) {
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(prev => {
      const next = !prev;
      console.log("toggleTheme run. Light mode next state:", next);
      if (next) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
      
      // Dispatch a custom theme-change event so other components can adapt
      window.dispatchEvent(new CustomEvent('theme-change', { detail: { isLightMode: next } }));
      
      return next;
    });
  };

  return (
    <div 
      className="fixed bottom-6 right-6 w-36 h-44 md:w-52 md:h-52 z-50 transition-all select-none pointer-events-none"
    >
      <div className={`absolute top-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 text-white/95 text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md pointer-events-none opacity-80 border border-white/10 font-sans z-30 transition-all duration-300 ${isHovered ? 'scale-105 opacity-100' : ''}`}>
        {isHovered ? (isLightMode ? "Switch to Dark" : "Switch to Light") : (isLightMode ? "Light Mode" : "Dark Mode")}
      </div>
      
      <div className="relative w-full h-full">
        {/* Invisible interactive overlay to intercept all clicks and hovers */}
        <button 
          onClick={toggleTheme}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer focus:outline-none bg-transparent border-none p-0 z-20"
          aria-label="Toggle theme"
        />

        {/* Canvas container (fully non-interactive so it doesn't block clicks or scrolls) */}
        <div className="w-full h-full pointer-events-none z-10">
          <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 45 }}>
            <ambientLight intensity={isLightMode ? 0.8 : 0.7} />
            <directionalLight 
              position={[5, 10, 5]} 
              intensity={isLightMode ? 1.5 : 1.2} 
              castShadow 
              shadow-mapSize={[1024, 1024]} 
            />
            <Float speed={2.5} rotationIntensity={0.08} floatIntensity={0.25}>
              <Lamp isLightMode={isLightMode} />
            </Float>
            <ContactShadows position={[0, -1.5, 0]} opacity={isLightMode ? 0.7 : 0.4} scale={10} blur={2.5} far={5} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
