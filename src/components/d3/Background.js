// src/components/Background.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  const mesh = useRef();

  // Rotate the box
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Background() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}