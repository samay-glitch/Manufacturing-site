import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const GearModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Subtle rotation
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    
    // Mouse parallax
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    
    meshRef.current.rotation.y += mouseX * 0.1;
    meshRef.current.rotation.x -= mouseY * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.5, 0.4, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#1C2541"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
  const { viewport } = useThree();

  return (
    <>
      <color attach="background" args={['#0B132B']} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow color="#F77F00" />
      <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#5BC0BE" />
      
      <Environment preset="studio" />
      
      <Sparkles
        count={200}
        scale={12}
        size={2}
        speed={0.4}
        opacity={0.3}
        color="#F77F00"
      />
      <Sparkles
        count={200}
        scale={12}
        size={2}
        speed={0.2}
        opacity={0.2}
        color="#5BC0BE"
      />
      
      <group position={[viewport.width > 6 ? viewport.width / 3.5 : 0, 0.5, 0]} scale={0.75}>
        <GearModel />
      </group>
      
      <ContactShadows position={[viewport.width > 6 ? viewport.width / 3.5 : 0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4} />
    </>
  );
};

export default HeroScene;
