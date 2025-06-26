import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import rakeshImg from "./rakesh.jpg";

const About = () => {
  return (
    <section
      id="About"
      className="scroll-mt-20 min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100
      dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white relative overflow-hidden px-4 py-20"
    >
      {/* Neon Blurred Circles */}
      <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-2xl opacity-20 bottom-10 right-10 animate-ping"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl w-full bg-white/10 dark:bg-white/5 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-purple-400 dark:border-purple-500 z-10"
      >
        <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-25 blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <motion.img
            src={rakeshImg}
            alt="Rakesh Profile"
            whileHover={{ scale: 1.1 }}
            className="w-44 h-44 rounded-full border-4 border-purple-500 shadow-xl object-cover"
          />

          {/* Content */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4">
              About Me
            </h2>

            <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
              Hi, I'm <span className="font-semibold text-purple-500 dark:text-purple-300">Rakesh</span> — a passionate Full Stack Developer skilled in
              <span className="text-pink-500 dark:text-pink-400 font-semibold"> Java</span> and
              <span className="text-pink-500 dark:text-pink-400 font-semibold"> Python</span>. I build modern, elegant applications using
              <span className="text-blue-500 dark:text-blue-400 font-semibold"> React.js, Node.js, and Tailwind CSS</span>.
              <br /><br />
              I'm also exploring the power of <span className="text-green-500 dark:text-green-400 font-semibold">AI tools</span> with interests in
              <span className="text-green-400 dark:text-green-300 font-semibold"> Machine Learning</span> and
              <span className="text-green-400 dark:text-green-300 font-semibold"> Data Science</span> to create intelligent solutions.
              <br /><br />
              I'm always eager to learn, build, and solve real-world problems creatively!
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a
                href="https://github.com/RAKESH5201"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-purple-500 transition"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tegada-rakesh-kumar-86167b316"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-purple-500 transition"
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
