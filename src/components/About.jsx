// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import rakeshImg from "./rakesh.jpg"; // Your local profile photo

// const About = () => {
//   return (
//     <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#6b8dd6] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-500 px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="relative max-w-5xl w-full bg-white/10 dark:bg-gray-800/30 rounded-3xl shadow-2xl backdrop-blur-md p-10 border border-gray-300 dark:border-gray-700 overflow-hidden"
//       >
//         {/* Gradient Border Glow */}
//         <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur-xl"></div>

//         <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
//           {/* Profile Image */}
//           <motion.img 
//             src={rakeshImg} 
//             alt="Rakesh Profile" 
//             whileHover={{ scale: 1.1 }}
//             className="w-44 h-44 rounded-full border-4 border-purple-500 shadow-xl object-cover"
//           />

//           {/* Text Content */}
//           <div className="text-center md:text-left">
//             <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
//               About Me
//             </h2>
//             <p className="text-gray-200 dark:text-gray-300 text-lg max-w-xl leading-relaxed mb-6">
//               Hi, I'm <span className="font-semibold text-purple-300">Rakesh</span> — a passionate Full Stack Developer skilled in 
//               <span className="text-pink-400 font-semibold"> Java</span> and 
//               <span className="text-pink-400 font-semibold"> Python</span>. 
//               I love crafting modern, responsive web applications using 
//               <span className="text-blue-400 font-semibold"> React.js, Node.js, and Tailwind CSS</span>.
//               <br /><br />
//               I'm deeply curious about the world of <span className="font-semibold text-green-400">AI tools</span> and have been actively exploring 
//               <span className="text-green-300 font-semibold"> Machine Learning</span> and 
//               <span className="text-green-300 font-semibold"> Data Science</span> to bridge software with intelligent solutions. 
//               <br /><br />
//               Always eager to learn, build, and solve real-world problems with a blend of creativity and technology.
//             </p>

//             {/* Social Icons */}
//             <div className="flex justify-center md:justify-start space-x-6">
//               <motion.a 
//                 href="https://github.com/RAKESH5201" 
//                 target="_blank"
//                 whileHover={{ scale: 1.2 }}
//                 className="text-3xl text-gray-300 hover:text-purple-400 transition"
//               >
//                 <FaGithub />
//               </motion.a>
//               <motion.a 
//                 href="https://linkedin.com/in/TEGADA RAKESH KUMAR" 
//                 target="_blank"
//                 whileHover={{ scale: 1.2 }}
//                 className="text-3xl text-gray-300 hover:text-purple-400 transition"
//               >
//                 <FaLinkedin />
//               </motion.a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import rakeshImg from "./rakesh.jpg"; // Your local profile photo

const About = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden px-4 py-10">

      {/* Neon Blurred Circles for Background Glow */}
      <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-2xl opacity-15 bottom-10 right-10 animate-ping"></div>

      {/* Glassmorphism Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-5xl w-full bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-purple-500 overflow-hidden z-10"
      >
        {/* Animated Gradient Border Glow */}
        <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Profile Image */}
          <motion.img 
            src={rakeshImg} 
            alt="Rakesh Profile" 
            whileHover={{ scale: 1.1 }}
            className="w-44 h-44 rounded-full border-4 border-purple-500 shadow-2xl object-cover"
          />

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold text-purple-300">Rakesh</span> — a passionate Full Stack Developer skilled in 
              <span className="text-pink-400 font-semibold"> Java</span> and 
              <span className="text-pink-400 font-semibold"> Python</span>. 
              I love crafting modern, responsive web applications using 
              <span className="text-blue-400 font-semibold"> React.js, Node.js, and Tailwind CSS</span>.
              <br /><br />
              I'm deeply curious about the world of <span className="font-semibold text-green-400">AI tools</span> and have been actively exploring 
              <span className="text-green-300 font-semibold"> Machine Learning</span> and 
              <span className="text-green-300 font-semibold"> Data Science</span> to bridge software with intelligent solutions. 
              <br /><br />
              Always eager to learn, build, and solve real-world problems with a blend of creativity and technology.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a 
                href="https://github.com/RAKESH5201" 
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-gray-300 hover:text-purple-400 transition"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/TEGADA RAKESH KUMAR" 
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-gray-300 hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
