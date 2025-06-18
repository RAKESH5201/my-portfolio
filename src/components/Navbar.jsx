import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 tracking-widest">
          RAKESH.DEV
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-yellow-300 hover:scale-105 transform transition duration-300"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block text-yellow-300 hover:text-white transition duration-300"
        >
          {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-yellow-300 cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white font-semibold space-y-4 py-6">
          {links.map((link) => (
            <li
              key={link}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-yellow-300 transform hover:scale-110 transition duration-300"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
          {/* Dark Mode in mobile menu */}
          <button
            onClick={toggleDarkMode}
            className="text-yellow-300 hover:text-white transition duration-300 mt-4"
          >
            {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
