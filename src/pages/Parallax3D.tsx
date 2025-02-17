import { useState } from "react";

export default function Parallax3D() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setRotateX((clientY - centerY) / 50);
    setRotateY((clientX - centerX) / 50);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-black"
      onMouseMove={handleMouseMove}
    >
      <div
        className="text-white text-4xl font-bold"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "0.1s",
        }}
      >
        3D Wandering Effect
      </div>
    </div>
  );
}
