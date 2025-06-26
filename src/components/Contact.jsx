// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("❌ Failed to send message. Try again later.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus("❌ Something went wrong. Try again later.");
//     }
//   };

//   return (
//     <section
//       id="Contact"
//       className="
//       scroll-mt-20 min-h-screen flex flex-col justify-center items-center
//       bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100
//       dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
//       text-gray-900 dark:text-white
//       relative overflow-hidden py-20 px-4"
//     >
//       {/* Neon Glows */}
//       <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-0 left-0 animate-pulse"></div>
//       <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-2xl opacity-20 bottom-0 right-0 animate-ping"></div>

//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-12"
//       >
//         Contact Me
//       </motion.h2>

//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-purple-500 rounded-3xl p-8 shadow-2xl max-w-md w-full z-10"
//       >
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           required
//           className="w-full p-3 mb-4 rounded bg-white/20 placeholder-gray-300 text-black dark:text-white border border-transparent focus:border-cyan-400 outline-none transition"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           required
//           className="w-full p-3 mb-4 rounded bg-white/20 placeholder-gray-300 text-black dark:text-white border border-transparent focus:border-cyan-400 outline-none transition"
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           required
//           rows="5"
//           className="w-full p-3 mb-4 rounded bg-white/20 placeholder-gray-300 text-black dark:text-white border border-transparent focus:border-cyan-400 outline-none transition resize-none"
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold py-3 rounded-xl transition"
//         >
//           Send Message
//         </button>
//         <p className="mt-4 text-center text-green-500 font-medium">{status}</p>
//       </motion.form>

//       {/* Contact Info */}
//       <div className="mt-10 space-y-4 text-center text-gray-700 dark:text-gray-300 z-10">
//         <div className="flex items-center justify-center space-x-3">
//           <FaEnvelope className="text-pink-400 text-xl" />
//           <a href="mailto:trakeshkumar2005@gmail.com" className="hover:underline">
//             trakeshkumar2005@gmail.com
//           </a>
//         </div>
//         <div className="flex items-center justify-center space-x-3">
//           <FaPhone className="text-cyan-400 text-xl" />
//           <a href="tel:+918074765033" className="hover:underline">
//             +91 8074765033
//           </a>
//         </div>
//         <div className="flex items-center justify-center space-x-3">
//           <FaLinkedin className="text-purple-400 text-xl" />
//           <a
//             href="http://www.linkedin.com/in/tegada-rakesh-kumar-86167b316"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             LinkedIn Profile
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <section
      id="Contact"
      className="
      scroll-mt-20 min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100
      dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white
      relative overflow-hidden py-20 px-4"
    >
      {/* Neon Glows */}
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

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-purple-500 rounded-3xl p-8 shadow-2xl max-w-md w-full z-10"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 mb-4 rounded bg-white/20 placeholder-gray-300 text-black dark:text-white border border-transparent focus:border-cyan-400 outline-none transition"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 rounded bg-white/20 placeholder-gray-300 text-black dark:text-white border border-transparent focus:border-cyan-400 outline-none transition"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 mb-4 rounded bg-white/20 placeholder-gray-300 text-black dark:text-white border border-transparent focus:border-cyan-400 outline-none transition resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold py-3 rounded-xl transition"
        >
          Send Message
        </button>
        <p className="mt-4 text-center text-green-500 font-medium">{status}</p>
      </motion.form>

      {/* Contact Info */}
      <div className="mt-10 space-y-4 text-center text-gray-700 dark:text-gray-300 z-10">
        <div className="flex items-center justify-center space-x-3">
          <FaEnvelope className="text-pink-400 text-xl" />
          <a href="mailto:trakeshkumar2005@gmail.com" className="hover:underline">
            trakeshkumar2005@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <FaPhone className="text-cyan-400 text-xl" />
          <a href="tel:+918074765033" className="hover:underline">
            +91 8074765033
          </a>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <FaLinkedin className="text-purple-400 text-xl" />
          <a
            href="http://www.linkedin.com/in/tegada-rakesh-kumar-86167b316"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
