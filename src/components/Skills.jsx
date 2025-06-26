import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={60} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={60} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare size={60} className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython size={60} className="text-green-400" /> },
  { name: "Java", icon: <FaJava size={60} className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={60} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={60} className="text-gray-400 bg-white rounded-full p-1" /> },
  { name: "MongoDB", icon: <SiMongodb size={60} className="text-green-600" /> },
  { name: "React.js", icon: <FaReact size={60} className="text-cyan-400" /> },
  { name: "Postman", icon: <SiPostman size={60} className="text-orange-400" /> },
];

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="Skills"
      className="scroll-mt-20 min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100
      dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white relative overflow-hidden py-20 px-4"
    >
      {/* Glowing Background Effects */}
      <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-2xl opacity-20 bottom-10 right-10 animate-ping"></div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-12 text-center"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 z-10 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.05}
            className="w-full"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-500 cursor-pointer flex flex-col items-center justify-center group"
            >
              {/* Glow border animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-30 blur-xl animate-pulse"></div>

              {/* Skill Icon */}
              {skill.icon}

              {/* Hover Ping Animation */}
              <div className="absolute w-20 h-20 rounded-full border-4 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>

              {/* Label */}
              <h3 className="mt-4 text-center text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
