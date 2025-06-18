import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden px-4 py-10">

      {/* Neon Blurred Circles */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-0 left-0 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-2xl opacity-20 bottom-0 right-0 animate-ping"></div>

      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-12"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg border border-purple-500 rounded-3xl p-8 shadow-2xl text-center max-w-md w-full z-10"
      >
        <p className="text-gray-300 mb-4">Let's connect for projects, collaboration or discussions!</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 justify-center">
            <FaEnvelope className="text-pink-400 text-xl" />
            <span>trakeshkumar2005@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <FaPhone className="text-cyan-400 text-xl" />
            <span>+91 8074765033</span>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <FaLinkedin className="text-purple-400 text-xl" />
            <a href="https://linkedin.com/in/rakesh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn Profile</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
