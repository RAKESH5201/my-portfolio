import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "To-Do List App",
      description: "A simple yet powerful To-Do application built with React and Tailwind CSS.",
      github: "https://github.com/RAKESH5201/todo-app",
      demo: "#",
    },
    {
      title: "Weather App",
      description: "A responsive Weather App using React, Tailwind, and OpenWeather API to display live weather data.",
      github: "https://github.com/RAKESH5201/weather-app",
      demo: "#",
    },
  ];

  return (
    <section
      id="Projects"
      className="scroll-mt-20 min-h-screen flex flex-col justify-center items-center
        bg-gradient-to-r from-gray-100 via-white to-gray-100
        dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        text-gray-900 dark:text-white relative overflow-hidden px-4 py-20"
    >
      {/* Neon background blobs */}
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 top-0 left-0 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-2xl opacity-20 bottom-0 right-0 animate-ping"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-16"
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2 z-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-white dark:bg-white/5 backdrop-blur-md border border-purple-300 dark:border-purple-500 rounded-3xl p-6 shadow-lg dark:shadow-purple-500/20 transition"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-cyan-300 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            <div className="flex space-x-6 text-xl">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:scale-110 transition"
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
