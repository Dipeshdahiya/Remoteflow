"use client";

import {
  PiAirplaneFill,
  PiArrowRight,
  PiCalendarCheckFill,
  PiCheckCircleFill,
  PiClipboardLight,
  PiFlagCheckeredFill,
  PiHouseFill,
  PiWatchFill,
} from "react-icons/pi";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const items = [
  {
    icon: <PiHouseFill className="text-2xl text-red-500" />,
    name: "Interactive Note Creation",
    image: "/images/company-wiki-template.webp", // Optional: If there's an image related to this feature
  },
  {
    icon: <PiFlagCheckeredFill className="text-2xl text-sky-600" />,
    name: "Collaboration with Classmates",
  },
  {
    icon: <PiCheckCircleFill className="text-2xl text-orange-500" />,
    name: "Chat Functionality",
  },
  {
    icon: <PiClipboardLight className="text-2xl text-green-500" />,
    name: "Meeting Scheduler",
  },
  {
    icon: <PiAirplaneFill className="text-2xl text-red-500" />,
    name: "Profile Setup",
  },
  {
    icon: <PiCalendarCheckFill className="text-2xl text-emerald-500" />,
    name: "Badges and Milestones",
  },
  {
    icon: <PiWatchFill className="text-2xl text-indigo-500" />,
    name: "Time Saver",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};

const SeventhSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // To simulate dark mode toggle, check if the theme is set in localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  return (
    <>
      <div className="flex flex-col pt-32 items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariants}
          custom={0}
          className="text-3xl xl:text-5xl font-medium justify-center items-center flex"
        >
          Endless ways to use it
        </motion.div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
        {items.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariants}
              custom={index + 1}
              className={`${
                index === 0
                  ? "xl:col-span-2 xl:row-span-3 md:col-span-2 border flex-col md:flex-row xl:flex-col"
                  : ""
              } p-6 rounded-xl flex ${index === 0 ? "justify-between" : ""}`}
            >
              <div className="flex flex-col">
                {item.icon}
                <div className="text-lg font-medium mt-2">{item.name}</div>
              </div>
              {item.image && (
                <div
                  className={`${
                    index !== 0 ? "justify-between" : "flex-col justify-end"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} Image`}
                    width={1000}
                    height={1000}
                    className="mt-10 w-96 rounded-xl"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SeventhSection;
