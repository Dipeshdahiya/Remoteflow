"use client";
// src/components/TextCont.tsx
import React, { useState } from 'react';

const TextCont: React.FC = () => {
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="bg-bl border-t h-full transform-all duration-300 dark:bg-black  pl-12 pr-20 overflow-y-auto " style={{ maxHeight: 'calc(100vh - 280px)' }}>
      <textarea
        value={content}
        onChange={handleChange}
        className="w-full  h-full transform-all duration-300  dark:bg-black p-4 border-none outline-none resize-none"
        placeholder="Start making your own notebook here..."
      />
    </div>
  );
};

export default TextCont;
