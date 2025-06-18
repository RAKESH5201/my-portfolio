// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500 text-white dark:text-white">

//       {/* Animated Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-6xl font-extrabold text-center"
//       >
//         Hi, I'm <span className="text-yellow-300">Rakesh</span>
//       </motion.h1>

//       {/* Animated Sub-title */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="mt-4 text-xl md:text-2xl text-center max-w-xl"
//       >
//         A passionate Full Stack Developer crafting modern & elegant web experiences.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="mt-8 flex space-x-6"
//       >
//         <button className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
//           Hire Me
//         </button>
//         <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
//           View Projects
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
// // import { motion } from "framer-motion";
// // import Particles from "react-tsparticles";
// // import { loadFull } from "tsparticles";

// // const Hero = () => {
// //   const particlesInit = async (main) => {
// //     await loadFull(main);
// //   };

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
// //       <Particles
// //         id="tsparticles"
// //         init={particlesInit}
// //         options={{
// //           background: {
// //             color: {
// //               value: "#0f0f0f",
// //             },
// //           },
// //           fpsLimit: 60,
// //           particles: {
// //             color: {
// //               value: "#00fff7",
// //             },
// //             links: {
// //               color: "#00fff7",
// //               distance: 150,
// //               enable: true,
// //               opacity: 0.5,
// //               width: 1,
// //             },
// //             move: {
// //               enable: true,
// //               speed: 2,
// //             },
// //             number: {
// //               value: 80,
// //             },
// //             opacity: {
// //               value: 0.5,
// //             },
// //             shape: {
// //               type: "circle",
// //             },
// //             size: {
// //               value: { min: 1, max: 3 },
// //             },
// //           },
// //         }}
// //         className="absolute inset-0 z-0"
// //       />

// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1.5 }}
// //         className="z-10 text-center px-6"
// //       >
// //         <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
// //           Hi, I'm Rakesh
// //         </h1>
// //         <p className="text-gray-300 text-lg">
// //           Full Stack Developer | AI Explorer | Problem Solver
// //         </p>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Hero;

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">

      {/* Neon Glow Circle in Background */}
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-2xl opacity-20 animate-ping bottom-10 right-10"></div>

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-lg bg-white/10 p-10 rounded-3xl shadow-2xl border border-purple-500 max-w-3xl mx-4 text-center"
      >
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Hi, I'm <span className="text-yellow-300">Rakesh</span>
        </motion.h1>

        {/* Animated Sub-title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl mx-auto"
        >
          A passionate Full Stack Developer crafting modern & elegant web experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
        >
          <button className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition duration-300">
            Hire Me
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition duration-300">
            View Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
