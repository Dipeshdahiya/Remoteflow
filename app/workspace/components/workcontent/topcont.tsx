"use client";
// src/components/TopCont.tsx
import React, { useState } from 'react';

interface TopContProps {
  defaultLogo?: string;
  defaultHeading?: string;
  defaultProfileImage?: string;
}

const TopCont: React.FC<TopContProps> = ({
  defaultLogo = '',
  defaultHeading = '',
  defaultProfileImage = '',
}) => {
  const [logo, setLogo] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajxu20aXxc4nHv0XH3_g62y7jlDdXqBZ2Gw&s');
  const [heading, setHeading] = useState(defaultHeading);
  const [profileImage, setProfileImage] = useState('https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg');

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-full h-[80px] px-[20px] py-[10px] flex pl-10 pr-20 items-center justify-between">
      {/* Left Section with Logo and Heading */}
      <div className="flex items-center">
        {/* Logo with upload functionality */}
        <div
          className="cursor-pointer p-2"
          onClick={() => document.getElementById('logoUpload')?.click()}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 object-cover bg-white dark:bg-black p-3 mt-[-60px] rounded-[50%]"
          />
          <input
            id="logoUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleLogoUpload}
          />
        </div>

        {/* Heading next to the logo */}
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="ml-4 text-3xl font-semibold outline-none bg-transparent"
          placeholder="Untitled"
        />
      </div>

      {/* Right Section with Profile Image */}
      <div className="relative flex items-center ml-[12px]">
        {/* Background Circle with Plus Icon */}
        <div className="absolute w-12 h-12 rounded-full bg-gray-600 dark:bg-gray-300 ml-6 flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-100 dark:text-gray-900">+</span>
        </div>

        {/* Profile Image */}
        <div
          className="relative cursor-pointer" // Move profile image to reveal the circle
          onClick={() => document.getElementById('profileImageUpload')?.click()}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 object-cover rounded-full"
          />
          <input
            id="profileImageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfileImageUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default TopCont;
