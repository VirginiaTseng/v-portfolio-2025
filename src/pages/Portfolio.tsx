import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { AmbientLight, PointLight } from "three";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        {/* <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} /> */}
        <OrbitControls enableZoom={false} />
        <Sphere args={[1, 100, 200]} scale={2} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#007acc" attach="material" distort={0.5} speed={2} />
        </Sphere>
      </Canvas>

      {/* Content */}
      <div className="z-10 text-center">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <h1 className="text-4xl font-extrabold mt-4">Virginia Huijuan</h1>
        <p className="text-lg text-gray-300">Electrical Engineer | AI Enthusiast | Software Developer</p>
      </div>

      {/* Skills Section */}
      <motion.div className="z-10 text-center mt-10">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {['React', 'Three.js', 'Python', 'Machine Learning', 'Embedded Systems'].map((skill, index) => (
            <motion.span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg" whileHover={{ scale: 1.1 }}>
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <div className="z-10 text-center mt-10">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="flex flex-col gap-10 mt-6">
          {["Project 1", "Project 2", "Project 3", "Project 4"].map((project, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
            return (
              <motion.div
                ref={ref}
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold">{project}</h3>
                <p className="text-gray-400">Description of {project}.</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">View Project</button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <motion.div className="mt-6 flex gap-6 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="hover:text-gray-400" />
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope size={30} className="hover:text-gray-400" />
        </a>
      </motion.div>
    </div>
  );
}
