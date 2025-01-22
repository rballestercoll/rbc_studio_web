"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-3xl font-bold cursor-pointer">rbc Studio</h1>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-6 text-4xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-2xl"
          >
            Close ✕
          </button>
          <nav>
            <a href="#hero" className="hover:text-gray-400 block">Hero</a>
            <a href="#hello-world" className="hover:text-gray-400 block">
              Hello World
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
