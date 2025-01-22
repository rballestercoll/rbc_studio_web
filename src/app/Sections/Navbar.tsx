// components/Navbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-blue-800 text-white z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <span className="cursor-pointer">wb</span>
        </div>

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
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-8 text-4xl font-semibold"
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
          <nav className="space-y-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#ars" className="hover:text-gray-400">
              Ars
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#prints" className="hover:text-gray-400">
              Prints
            </a>
            <a href="#nfts" className="hover:text-gray-400">
              NFTs
            </a>
            <a href="#gallery" className="hover:text-gray-400">
              Virtual Gallery
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
            <a href="#contact2" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
