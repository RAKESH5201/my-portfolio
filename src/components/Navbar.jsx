import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-purple-400/30 backdrop-blur-lg shadow-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-gray-900 dark:text-white">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 cursor-pointer"
          onClick={() => scrollToSection("Home")}
        >
          RAKESH.DEV
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => scrollToSection(link)}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block text-yellow-400 hover:text-white transition duration-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <BsSun size={22} /> : <BsMoon size={22} />}
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-yellow-400 cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/70 text-white font-medium space-y-4 py-6 transition-all duration-300">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-lg hover:text-yellow-300 transition"
            >
              {link}
            </li>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-yellow-300 hover:text-white transition duration-300 mt-2"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <BsSun size={22} /> : <BsMoon size={22} />}
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
