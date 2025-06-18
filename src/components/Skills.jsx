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
    <section className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-10">
          My Unique Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <Tilt key={index} tiltMaxAngleX={25} tiltMaxAngleY={25} glareEnable={true} glareMaxOpacity={0.45} scale={1.05} className="w-full">
              <motion.div
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-500 cursor-pointer transform-gpu flex flex-col items-center justify-center hover:shadow-purple-500/50 group"
              >
                {/* Glowing Background Ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-30 blur-xl animate-pulse"></div>

                {/* Skill Icon */}
                {skill.icon}

                {/* Neon Ping Ring on Hover */}
                <div className="absolute w-24 h-24 rounded-full border-4 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>

                <h3 className="mt-4 text-center text-lg font-semibold text-white">{skill.name}</h3>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
