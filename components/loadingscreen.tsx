'use client';
import React, { useEffect } from 'react';
import { preLoaderAnim } from './loading';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader bg-white text-black dark:bg-black dark:text-white">
  <div className="texts-container flex items-center justify-between h-16 w-70 text-lg font-extrabold dark:text-white">
    <span>Build</span>
    <span>Learn</span>
    <span>Lead</span>
  </div>
</div>

  );
};

export default PreLoader;
