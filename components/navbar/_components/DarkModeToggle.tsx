"use client";

import React, { useState, useEffect } from "react";
import { PiSunFill, PiMoonFill } from "react-icons/pi";

const DarkModeToggle: React.FC = () => {
  const [isDarkModeLocal, setIsDarkModeLocal] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkModeLocal ? "dark" : "light";
    setIsDarkModeLocal(!isDarkModeLocal);
    document.documentElement.classList.toggle("dark", newTheme === "dark"); // Apply/remove dark class
    localStorage.setItem("theme", newTheme); // Save user preference to localStorage
  };

  useEffect(() => {
    // Get initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkModeLocal(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark"); // Apply dark class if needed
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`ml-4 p-2 text-2xl rounded-md ${
        isDarkModeLocal ? "text-white-500" : "text-black-500"
      }`}
    >
      {isDarkModeLocal ? <PiSunFill /> : <PiMoonFill />}
    </button>
  );
};

export default DarkModeToggle;
