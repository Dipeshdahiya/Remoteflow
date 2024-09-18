"use client"; // Ensures it's a Client Component

import React, { useState } from 'react';
import {
  FaTimes,
  FaUser,
  FaCalendarAlt,
  FaSave,
  FaSignOutAlt,
  FaCog,
} from 'react-icons/fa'; // Importing icons
import Calendar from './Calander'; // Import the Calendar component

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsCalendarOpen(false); // Close calendar when sidebar closes
    }
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <>
      {/* Modern Circle-in-Circle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed bottom-4 right-4 z-30 p-2 w-10 h-10 bg-black text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'rotate-45' : ''
        } flex items-center justify-center align-center`}
      >
        {isOpen ? (
          <FaTimes size={20} />
        ) : (
          <div className="absolute">
            {/* Outer circle */}
            <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            {/* Inner circle */}
            <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2"></div>
          </div>
        )}
      </button>

      {/* Sliding Sidebar */}
      <div
        className={`fixed border bottom-16 right-4 w-10 bg-black p-3 rounded-full transition-all duration-300 ease-in-out z-20 shadow-xl flex flex-col items-center overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Container for the icons */}
        <div
          className={`flex flex-col items-center space-y-4 transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="text-white hover:text-gray-300">
            <FaUser size={22} title="View Profile" />
          </button>
          <button className="text-white hover:text-gray-300">
            <FaCog size={22} title="Settings" />
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={toggleCalendar}
          >
            <FaCalendarAlt size={22} title="Calendar" />
          </button>
          <button className="text-white hover:text-gray-300">
            <FaSave size={22} title="Save" />
          </button>
          <button className="text-white hover:text-gray-300">
            <FaSignOutAlt size={22} title="Logout" />
          </button>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Render Calendar when isCalendarOpen is true */}
      {isCalendarOpen && <Calendar />}
    </>
  );
};

export default Sidebar;
