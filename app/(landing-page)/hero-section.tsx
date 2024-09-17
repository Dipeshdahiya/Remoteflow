"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";
import { useInView } from "react-intersection-observer";

const tabs = [
  // Tabs data unchanged
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "Notes",
    description: "Interactive and easy note management.",
    image: "/assets/GroovyDoodle.svg",
    feature: "Now with Q&A",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Collab",
    description: "Work together with classmates seamlessly.",
    image: "/assets/PlantDoodle.svg",
  },
  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Chat",
    description: "Communicate and track conversations easily.",
    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Meet",
    description: "Schedule and manage meetings effortlessly.",
    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const { ref: tabsRef, inView: tabsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: activeImageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Add dark mode state
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  
  const childVariants1 = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay:5,
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };
  const childVariants2 = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay:5.3,
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };
  const childVariants3 = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay:5.6,
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };
  const childVariants4 = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay:5.9,
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };
  
  

  // Function to toggle dark mode for demo
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <motion.div
      className="md:items-center flex flex-col"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="font-medium 2xl:w-1/3 md:w-2/3 xl:w-1/2 lg:px-0 px-8 text-5xl xl:text-6xl flex justify-center xl:font-medium xl:pt-14 text-center pt-6"
        variants={childVariants1}
      >
        Write, plan, share. With RemoteFlow by your side.
      </motion.div>

      <motion.p
        className="text-2xl pt-4 text-center w-2/3 mx-auto"
        variants={childVariants2}
      >
        RemoteFlow is your ultimate workspace for seamless collaboration and
        efficient notes management.
      </motion.p>

      <motion.div
        className="flex gap-4 pt-6 items-center justify-center"
        variants={childVariants3}
      >
       <Link href="/sign-in">
  <Button
    className={`py-1 md:rounded-[5px] ${
      isDarkMode
        ? 'border-gray-300 text-white hover:bg-gray-500'
        : 'border-black-300 rounded-[5px] text-white hover:bg-gray-800'
    } border transition-colors duration-300`}
  >
    <div className="flex items-center justify-center">
      <div className="text-lg">Get Your Remote</div>
      <div>
        <PiArrowRight className="ml-2" />
      </div>
    </div>
  </Button>
</Link>

      </motion.div>

      <motion.div
  className={`pt-10 rounded-[20px] m-10 p-5 xl:pt-20 items-center justify-center ${
    isDarkMode ? 'bg-white':'bg-white'
  }`}
  variants={childVariants4}
>
<Image
  src="/assets/ReadingSideDoodle.svg"
  alt="hero image"
  width={1000}
  height={1000}
  className={`flex items-center justify-center mx-auto w-60 xl:w-80 ${isDarkMode ? 'invert' : ''}`}
/>

</motion.div>



      {isSmallScreen ? (
        <motion.div
        className="px-8"
        ref={tabsRef}
        initial="hidden"
        animate={tabsInView ? "visible" : "hidden"}
        variants={scrollRevealVariants}
      >
        <div className="grid grid-cols-4 md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex p-1 md:p-8 cursor-pointer ${
                activeTab.name === tab.name
                  ? `rounded-md md:rounded-xl ${isDarkMode ? 'bg-black border-black-300' : 'bg-black md:bg-white border-gray-200 md:border'} items-center justify-center flex p-1`
                  : `${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'md:bg-[#f6f5f4]'} rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7]`
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <div className="flex flex-col items-center md:justify-center mx-auto">
                <div className="hidden md:flex text-4xl">{tab.icon}</div>
                <div className="font-medium text-sm xl:text-lg mt-1">
                  {tab.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      ) : (
        <motion.div
          className="flex xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]"
          ref={tabsRef}
          initial="hidden"
          animate={tabsInView ? "visible" : "hidden"}
          variants={scrollRevealVariants}
        >
          {tabs.map((tab) => (
            <div
            key={tab.name}
            className={`xl:flex  justify-center space-x-4 xl:pt-4 sm:my-10 xl:my-0 w-60 h-36 border rounded-xl pt-2 ${
              activeTab.name === tab.name
                ? "rounded-md xl:rounded-xl p-1 items-center border-none justify-center hover:bg-[#eae7e7]" + (isDarkMode ? "bg-white text-white" : "bg-black")
                : "rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7]" + (isDarkMode ? "bg-white text-white " : "bg-black ")
            }`}
            onMouseEnter={() => setActiveTab(tab)}
          >
            <div className="px-4">
              <div className="flex items-center">
                <div>{tab.icon}</div>
                <div className="text-2xl font-medium">{tab.name}</div>
              </div>
              <div className="flex flex-col text-sm">
                <div>{tab.description}</div>
              </div>
            </div>
          </div>
          
          ))}
        </motion.div>
      )}

      <motion.div
        className="hidden md:flex py-10 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]"
        ref={activeImageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={scrollRevealVariants}
      >
        {activeTab && (
          <div className="md:flex items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className={`w-full p-20 xl:p-40 shadow-md rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-[#f6f5f4]'} `}
              />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
export default HeroSection;
