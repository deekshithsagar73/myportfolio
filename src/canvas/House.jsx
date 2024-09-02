
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene, animations } = useGLTF('assets/robot_playground/scene.gltf');
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, scene]);

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return <primitive object={scene} scale={7} position={[0, -1.5, 0]} />;
}

const House = () => {
  return (
    <Canvas 
      shadows={true} // Ensure shadows are enabled
      camera={{ position: [0, 15, 30], fov: 60 }} // Adjusted camera position
    >
      {/* Lights and model rendering as before */}
      <ambientLight intensity={0.3} /> 
      <hemisphereLight 
        skyColor={new THREE.Color(0xffffff)} 
        groundColor={new THREE.Color(0x444444)} 
        intensity={0.6}
      />
      <directionalLight 
        position={[0, 10, 5]} 
        intensity={0.8} 
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Model />
      <OrbitControls enableDamping={true} enablePan={true} enableZoom={false} />
    </Canvas>
  );
};


export default House;
