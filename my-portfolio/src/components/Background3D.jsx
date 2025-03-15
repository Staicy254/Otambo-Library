import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Background3D = () => {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-full -z-10">
      {/* Add a 3D Stars effect */}
      <Stars radius={100} depth={50} count={5000} factor={4} />
    </Canvas>
  );
};

export default Background3D;
