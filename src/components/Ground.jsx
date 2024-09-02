import React from 'react';
import { usePlane } from '@react-three/cannon';

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={'#7f8c8d'} />
    </mesh>
  );
};

export default Ground;
