const Footer = () => {
  return (
    <footer
      className="
      bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200
      dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white
      relative overflow-hidden text-center py-8 px-4 mt-20
    "
    >
      {/* Neon Blurred Circles for Glow */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-0 left-0 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-2xl opacity-20 bottom-0 right-0 animate-ping"></div>

      {/* Footer Content */}
      <div className="relative z-10">
        <p className="text-lg font-medium">© 2025 Rakesh Tegada. All Rights Reserved.</p>
        <p className="text-sm mt-1">
          Built with <span className="text-cyan-400 font-semibold">React</span> &{" "}
          <span className="text-blue-400 font-semibold">Tailwind CSS</span> 💙
        </p>
      </div>
    </footer>
  );
};

export default Footer;
