import React, { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkMode = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(darkMode);
    }
  }, []);

  return (
    <Link href={"/"}>
      <span
        className={`font-bold text-2xl ml-4 `}
      >
        REMOTEFLOW
      </span>
    </Link>
  );
};

export default Logo;
