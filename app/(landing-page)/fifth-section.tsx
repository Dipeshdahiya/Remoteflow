"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  PiSparkleLight,
  PiBookOpenTextLight,
  PiRocketLaunchFill,
  PiMegaphoneLight,
  PiCompassLight,
  PiHeadset,
} from "react-icons/pi";

const tabs = [
  { icon: <PiSparkleLight />, name: "Interactive Note Creation", image: "/assets/DancingDoodle.svg" },
  { icon: <PiBookOpenTextLight />, name: "Collaboration with Classmates", image: "/assets/DogJumpDoodle.svg" },
  { icon: <PiRocketLaunchFill />, name: "Chat Functionality", image: "/assets/MeditatingDoodle.svg" },
  { icon: <PiMegaphoneLight />, name: "Meeting Scheduler", image: "/assets/ReadingDoodle.svg" },
  { icon: <PiCompassLight />, name: "Profile Setup", image: "/assets/SittingDoodle.svg" },
  { icon: <PiHeadset />, name: "Badges and Milestones", image: "/assets/SleekDoodle.svg" },
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

const FifthSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Determine if dark mode is enabled (replace this with your actual dark mode state)
  const isDarkMode = false; // Replace with actual dark mode state

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      custom={0}
      className={`relative flex justify-center items-center flex-col px-8 md:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ${isDarkMode ? 'dark' : ''}`}
    >
      <motion.div
        variants={fadeUpVariants}
        custom={1}
        className="pt-20 lg:pt-0 text-3xl xl:text-5xl font-medium text-center pb-8"
      >
        Features for Every Team
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        custom={2}
        className={`grid grid-cols-4 md:grid-cols-6 md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0 ${isDarkMode ? 'dark' : ''}`}
      >
        {tabs.map((tab, index) => (
          <motion.div
            key={tab.name}
            variants={fadeUpVariants}
            custom={3 + index}
            className={`flex rounded-[10px]  p-1 md:p-8 border cursor-pointer ${
              activeTab.name === tab.name
                ? "rounded-md xl:rounded-xl p-1 items-center border-none justify-center hover:bg-[#eae7e7]" + (isDarkMode ? "bg-white text-white" : "bg-black")
                : "rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7]" + (isDarkMode ? "bg-white text-white " : "bg-black ")
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col items-center text-center md:justify-center mx-auto">
              <div className="hidden md:flex text-4xl">{tab.icon}</div>
              <div className="font-medium text-sm xl:text-lg mt-1">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Display content based on the active tab */}
      <motion.div
        variants={fadeUpVariants}
        custom={10}
        className="py-10 lg:px-16 xl:px-0 md:px-16 w-full"
      >
        {activeTab && (
          <div className="flex justify-center items-center flex-col">
            <div className={`w-full border p-20 xl:p-40 rounded-xl ${isDarkMode ? 'bg-white' : 'bg-white'}`}>
            <Image
  src={activeTab.image}
  width={1025}
  height={500}
  alt="feature illustration"
  className={`w-full rounded-xl `}
/>

            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FifthSection;
