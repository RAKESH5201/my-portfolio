import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "To-Do List App",
      description: "A simple yet powerful To-Do application built with React and Tailwind CSS.",
      github: "https://github.com/RAKESH5201/todo-app",
      demo: "#", // replace with live demo if available
    },
    {
      title: "Weather App",
      description: "A responsive Weather App using React, Tailwind, and OpenWeather API to display live weather data.",
      github: "https://github.com/RAKESH5201/weather-app",
      demo: "#", // replace with live demo if available
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden px-4 py-10">

      {/* Neon Blurred Circles for Background */}
      <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-2xl opacity-15 bottom-10 right-10 animate-ping"></div>

      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-12"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 z-10">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="bg-white/10 backdrop-blur-lg border border-purple-500 rounded-3xl p-6 shadow-2xl flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex space-x-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-200 text-xl"
              >
                <FaGithub />
              </a>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-200 text-xl"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
