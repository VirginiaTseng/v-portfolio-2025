import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";


const portfolioProjects = [
  {
    title: "SCADA Monitoring System",
    description: "Developed a real-time monitoring system for industrial automation.",
    link: "#",
  },
  {
    title: "Cloud Migration Project",
    description: "Led cloud infrastructure migration for enterprise applications.",
    link: "#",
  },
  {
    title: "Machine Learning for Power Systems",
    description: "Implemented predictive analytics for grid stability.",
    link: "#",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Hero Section with Parallax Effect */}
      <motion.div
        className="max-w-4xl text-center py-10 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <h1 className="text-4xl font-extrabold mt-4">Virginia Huijuan</h1>
        <p className="text-gray-600 text-lg">Electrical Engineer | AI Enthusiast | Software Developer</p>
      </motion.div>

      {/* Portfolio Section with 3D Tilt Effect */}
      <motion.div className="max-w-4xl py-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {["Project 1", "Project 2"].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              className="perspective-1000"
            >
              <Card className="shadow-xl">
                <CardContent>
                  <h3 className="text-xl font-bold">{project}</h3>
                  <p className="text-gray-600">Description of {project}.</p>
                  <Button className="mt-2" onClick={() => alert(`${project} clicked!`)}>View Project</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <section className="mt-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {portfolioProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="p-4 bg-white shadow-lg rounded-lg transition hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-700">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
      

      {/* Contact Section */}
      <motion.div className="max-w-4xl text-center py-6" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-700 hover:text-black" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-gray-700 hover:text-blue-700" />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope size={30} className="text-gray-700 hover:text-red-600" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
