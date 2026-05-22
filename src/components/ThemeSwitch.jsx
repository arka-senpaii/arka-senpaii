import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

const Lamp = ({ isLightMode, toggleTheme }) => {
  const plugRef = useRef();
  const bulbRef = useRef();
  const tubeRef = useRef();

  // Target values
  const targetPlugPos = isLightMode ? new THREE.Vector3(0.25, -0.45, 0.15) : new THREE.Vector3(0.8, -0.8, 0.5);
  const targetEmissive = isLightMode ? 2 : 0;
  
  // Curve setup
  const curve = useMemo(() => new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0, -0.4, 0),
    new THREE.Vector3(0.4, -1, 0.25),
    new THREE.Vector3(0.8, -0.8, 0.5)
  ), []);

  useFrame((state, delta) => {
    if (!plugRef.current || !bulbRef.current || !tubeRef.current) return;
    
    // Lerp plug position
    plugRef.current.position.lerp(targetPlugPos, delta * 6);
    
    // Rotate plug so it faces the socket when attached, or lies down when detached
    const targetRotX = isLightMode ? 0 : Math.PI / 2;
    plugRef.current.rotation.x = THREE.MathUtils.lerp(plugRef.current.rotation.x, targetRotX, delta * 6);
    
    // Lerp bulb emissive
    bulbRef.current.emissiveIntensity = THREE.MathUtils.lerp(bulbRef.current.emissiveIntensity, targetEmissive, delta * 8);
    
    // Only update wire geometry if the plug is moving
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
      <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.45, 0.1, 32]} />
        <meshStandardMaterial color="#222" roughness={0.8} />
      </mesh>

      {/* Arm */}
      <mesh position={[-0.15, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.4]} />
        <meshStandardMaterial color="#111" roughness={0.5} />
      </mesh>

      {/* Head */}
      <mesh position={[-0.45, 0.75, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <coneGeometry args={[0.25, 0.4, 32]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} />
      </mesh>

      {/* Bulb inside the head */}
      <mesh position={[-0.45, 0.6, 0]} ref={bulbRef}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffeeaa" 
          emissiveIntensity={0} 
          toneMapped={false} 
        />
        {isLightMode && <pointLight position={[0, 0, 0]} intensity={1.5} distance={3} color="#ffeeaa" />}
      </mesh>

      {/* Socket block on base */}
      <mesh position={[0.25, -0.45, 0]} castShadow>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Socket hole */}
      <mesh position={[0.25, -0.45, 0.08]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#000" />
      </mesh>

      {/* Plug (Interactive Component) */}
      <group 
        ref={plugRef} 
        position={[0.8, -0.8, 0.5]} 
        onClick={(e) => {
          e.stopPropagation();
          toggleTheme();
        }}
      >
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.08, 0.12]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        {/* Plug Pin */}
        <mesh position={[0, 0, 0.06]} rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.06]} />
          <meshStandardMaterial color="#888" metalness={0.8} />
        </mesh>
      </group>

      {/* Wire from base to plug */}
      <mesh ref={tubeRef} castShadow>
        <tubeGeometry args={[curve, 20, 0.015, 8, false]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
    </group>
  );
};

export default function ThemeSwitch() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // We want default to be dark, so adding 'dark' class if it's missing on initial load
    if (!document.documentElement.classList.contains('dark') && !document.documentElement.classList.contains('light')) {
       document.documentElement.classList.add('dark');
    }
    
    // Check initial mode
    if (!document.documentElement.classList.contains('dark')) {
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed bottom-6 right-6 w-32 h-40 md:w-48 md:h-48 z-50">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/50 text-white/80 text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md pointer-events-none opacity-50 font-sans z-10 transition-colors">
        {isLightMode ? "Disconnect" : "Connect Wire"}
      </div>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Lamp isLightMode={isLightMode} toggleTheme={toggleTheme} />
        </Float>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={2} far={5} />
      </Canvas>
    </div>
  );
}
