"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export function Menu() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkMode = document.documentElement.getAttribute("data-theme") === "dark";
      setIsDarkMode(darkMode);
    }
  }, []);

  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex space-x-4">
        <li>
          <Link href="/community">
            <p className={`text-lg`}>
              Community
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
