"use client";
// src/components/CoverImage.tsx
import React, { useState } from 'react';

interface CoverImageProps {
  defaultImage?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ defaultImage }) => {
  const [image, setImage] = useState('https://crowdheritage.eu/img/assets/img/content/background-space.png');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="w-full h-[20vh] bg-gray-100 dark:bg-gray-950 relative cursor-pointer rounded-b-[10px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={() => document.getElementById('imageUpload')?.click()}
    >
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default CoverImage;
