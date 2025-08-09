import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";

// This component creates a single, floating, distorted sphere
function DistortedSphere({ position, color, speed, factor }) {
  const ref = useRef();

  // Animate the sphere on every frame
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 2;
      ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.005;
    }
  });

  return (
    <Icosahedron ref={ref} args={[1, 4]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={speed}
        roughness={0.1}
        factor={factor}
      />
    </Icosahedron>
  );
}

// The main scene component that holds everything
export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -5]} />
      <pointLight position={[10, 10, 5]} intensity={0.8} />
      <DistortedSphere
        position={[-2, 1, -5]}
        color="#0ea5e9"
        speed={1}
        factor={3}
      />
      <DistortedSphere
        position={[3, -2, -6]}
        color="#6366f1"
        speed={0.8}
        factor={4}
      />
    </>
  );
}
