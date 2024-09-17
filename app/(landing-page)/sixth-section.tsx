"use client";

import Image from "next/image";
import { useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { TbSwitch3 } from "react-icons/tb";
import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    text: "1M+",
    subtext: "community members",
  },
  {
    text: "150+",
    subtext: "community groups",
  },
  {
    text: "50+",
    subtext: "countries represented",
  },
  {
    header: "Customize the info you track",
    subheading: "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.",
    image: "/assets/DumpingDoodle.svg",
  },
  {
    header: "Choose from a variety of colors",
    subheading: "Everything is customizable. Choose your own colors, icons, and more to make Bird work for you.",
    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    title: "Visualize, filter & sort any way you want",
    description: "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.",
    images: [
      { title: "Interactive Note Creation Workshop", picture: "/assets/ZombieingDoodle.svg" },
      { title: "Collaboration Tools Webinar", picture: "/assets/SprintingDoodle.svg" },
      { title: "AI in Education Conference", picture: "/assets/UnboxingDoodle.svg" },
      { title: "Tech Innovations Expo", picture: "/assets/RollingDoodle.svg" },
      { title: "Study Tools Summit", picture: "/assets/DogJumpDoodle.svg" },
    ],    
  },
  {
    profile: "/assets/DoogieDoodle.svg",
    userName: "Dhruv Kajla",
    userHandle: "@dhruvkajla",
    userText: (
      <div className="md:mt-6">
        <span className="text-sky-500">@remoteflow </span>
        It is definitely the best tool I have ever used.
      </div>
    ),
  },
  {
    profile: "/assets/DoogieDoodle.svg",
    userName: "Jenney Kapoor",
    userHandle: "@jenneykapoor",
    userText: (
      <div className="md:mt-6">
        <span className="text-sky-500">@remoteflow </span>
        It is definitely the best tool I have ever used.
      </div>
    ),
  },
  {
    profile: "/assets/DoogieDoodle.svg",
    userName: "Mehak Rohilla",
    userHandle: "@mehakrohilla",
    userText: (
      <div className="md:mt-6">
        <span className="text-sky-500">@remoteflow </span>
        It is definitely the best tool I have ever used.
      </div>
    ),
  }
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

const SixthSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isDarkMode = false; // Update this state as per your dark mode implementation

  const handleDotClick = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      custom={0}
      className={`pt-20 xl:pt-24 flex justify-center items-center flex-col `}
    >
      <motion.div
        variants={fadeUpVariants}
        custom={1}
        className={`text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/2 text-center `}
      >
        Join a global movement. Unleash your creativity.
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        custom={2}
        className={`py-4 px-10 xl:w-1/2 2xl:w-1/3 md:w-2/3 text-center `}
      >
        Our vibrant community produces content, teaches courses, and leads events all over the world.
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        custom={3}
        className={`text-sky-500 flex items-center hover:underline cursor-pointer `}
      >
        Learn more <PiArrowRight className="ml-3 text-sm" />
      </motion.div>
      <div className={`grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full`}>
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}
            custom={4 + index}
            className={`col-span-12 ${
              index <= 2
                ? "md:col-span-6 lg:col-span-4"
                : index <= 4
                ? "md:col-span-6"
                : index === 5
                ? "md:col-span-6 lg:col-span-8 lg:row-span-3"
                : "col-span-12 lg:col-span-4 md:col-span-4"
            } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#f6f5f4] text-black'} p-6 rounded-xl flex flex-col`}
          >
            {index <= 2 ? (
              <div className="flex flex-col items-center text-center">
                <div className={`text-5xl font-medium ${isDarkMode ? 'text-white' : 'text-sky-600'}`}>
                  {tab.text}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>{tab.subtext}</div>
              </div>
            ) : index <= 4 ? (
              <div className="flex flex-col items-center text-center">
                <div className={`text-2xl font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{tab.header}</div>
                <div className={`text-sm mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{tab.subheading}</div>
                <div className="flex justify-center items-center flex-col">
                  <Image
                    src={tab.image || ""}
                    width={1025}
                    height={500}
                    alt="illustration"
                    className="w-full rounded-xl p-10 xl:p-20"
                  />
                </div>
              </div>
            ) : index === 5 ? (
              <>
                {tab.images && (
                  <div className="flex flex-col items-center justify-center min-h-screen px-4">
                    <Image
                      src={tab.images[activeImageIndex].picture}
                      alt={`${tab.images[activeImageIndex].title} Image`}
                      width={1025}
                      height={500}
                      className="w-full max-w-screen-lg rounded-xl"
                    />
                    <div className={`text-xl font-medium mt-10 pb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      {tab.images[activeImageIndex].title}
                    </div>
                    <div className="flex space-x-2 xl:space-x-6 xl:mt-10">
                      {tab.images.map((_, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleDotClick(idx)}
                          className={`${
                            idx === activeImageIndex
                              ? "p-2 rounded-full bg-green-400"
                              : "p-2 rounded-full bg-blue-400"
                          } cursor-pointer`}
                        ></div>
                      ))}
                    </div>
                  </div>                
                )}
              </>
            ) : index > 5 ? (
              <div className="flex flex-col items-center text-center">
                <Image
                  src={tab.profile || ""}
                  width={100}
                  height={100}
                  alt="profile"
                  className="w-20 h-20 rounded-full border p-1"
                />
                <div className={`text-xl font-normal mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {tab.userName}
                </div>
                <div className={`text-sm font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {tab.userHandle}
                </div>
                <div className={`text-sm font-normal mt-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {tab.userText}
                </div>
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SixthSection;
