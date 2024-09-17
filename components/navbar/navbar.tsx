"use client";

import React, { useState, useEffect } from "react";
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set initial theme based on user preference or system setting
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const navbarClasses = `
    flex items-center justify-between h-14
    sticky top-0 z-50 border-b
    transition-colors duration-300
    bg-white text-black border-gray-200
    dark:bg-black dark:text-white dark:border-gray-700
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Start off transparent and slightly above the screen
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
      transition={{ duration: 0.75,delay:5 }} // Animation duration of 0.75 seconds
      className={navbarClasses}
    >
      <div className="ml-4">
        <Logo />
      </div>
      <div className="flex justify-center">
        <Menu />
      </div>
      <div className="flex mr-10">
        <ActionButtons setIsDarkMode={setIsDarkMode} />
      </div>
    </motion.div>
  );
};

export default Navbar;
