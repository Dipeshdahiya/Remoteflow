"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});


const tabs = [
  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Interactive Note Creation",
    subheading:
      "Create and organize notes with ease. Tailor your notes to fit your needs, whether for class projects or personal use.",
    images: [
      { title: "Create", picture: "/assets/ZombieingDoodle.svg" },
      { title: "Meet", picture: "/assets/SprintingDoodle.svg" },
      { title: "Style", picture: "/assets/UnboxingDoodle.svg" },
      { title: "Badges", picture: "/assets/RollingDoodle.svg" },
      { title: "Note", picture: "/assets/DogJumpDoodle.svg" },
      { title: "Interact", picture: "/assets/RunningDoodle.svg" },
    ],
    description: "Visualize and manage your notes in various formats.",
  },
  {
    icon: <PiEyeLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Collaboration with Classmates",
    subheading:
      "Share notes and collaborate with your peers seamlessly. Stay connected and work together on projects and assignments.",
    image: "/assets/DumpingDoodle.svg",
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Customization and Flexibility",
    subheading:
      "Personalize your workspace with different themes, colors, and layouts to match your preferences and improve your workflow.",
    image: "/assets/CoffeeDoddle.svg",
  },
];

type Tab = {
  icon: JSX.Element;
  header: string;
  subheading: string;
  images?: { title: string; picture: string }[];
  description?: string;
  image?: string;
};

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


const FourthSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const handleTabClick = (index: any) => {
    setActiveTab(index);
    setActiveImageIndex(0); // Reset activeImageIndex when clicking a new tab
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      custom={0}
      id="fourth-section"
      className="flex flex-col pt-20 xl:py-32 items-center justify-center"
    >
      <motion.div
        variants={fadeUpVariants}
        custom={1}
        className="text-3xl xl:text-5xl font-medium justify-center items-center flex"
      >
        Powerful Features for RemoteFlow
      </motion.div>

      <motion.div
  variants={fadeUpVariants}
  custom={2}
  className="grid xl:grid-cols-4 md:grid-cols-2 md:row-span-1 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full"
>
  {tabs.map((tab, index) => (
    <motion.div
      key={index}
      variants={fadeUpVariants}
      custom={3 + index}
      className={`${
        index === 0
          ? "xl:col-span-4 xl:row-span-3 md:col-span-2 flex-col xl:flex-col"
          : "xl:col-span-2 xl:row-span-3 flex-col"
      } ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#f6f5f4] text-black'
      } p-6 rounded-xl flex`}
    >
      <div className="flex flex-col">
        {tab.icon}
        <div className="text-lg font-medium mt-2">{tab.header}</div>
        <div className="mt-2">{tab.subheading}</div>
      </div>
      <>
        {index === 0 && tab.images && (
          <motion.div
            variants={fadeUpVariants}
            custom={4 + index}
          >
            <Image
              src={tab.images[activeImageIndex].picture}
              alt={`${tab.images[activeImageIndex].title} Image`}
              width={500}
              height={500}
              className="
                flex justify-center my-10 xl:my-16 rounded-xl
                mx-auto
              "
            />
            <div className="grid grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 xl:w-1/2 mx-auto gap-1 xl:space-x-2">
              {tab.images.map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`${
                    idx === activeImageIndex
                      ? "rounded-md bg-[#dbd9d9] items-center justify-center flex p-1 cursor-pointer"
                      : "rounded-md p-1 items-center justify-center bg-[#f6f5f4] hover:bg-[#eae7e7] cursor-pointer"
                  }`}
                >
                  <div className="text-sm items-center justify-center flex">
                    {image.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </>
      <>
        {index !== 0 && (
          <motion.div
            variants={fadeUpVariants}
            custom={5 + index}
          >
            <Image
              src={tab?.image || ""}
              alt={`${tab.header} Image`}
              width={500}
              height={500}
              className="mt-10 rounded-xl"
            />
          </motion.div>
        )}
      </>
    </motion.div>
  ))}
</motion.div>

<motion.div
  variants={fadeUpVariants}
  custom={6}
  className={cn(
    "flex items-center justify-center text-xl xl:text-2xl xl:py-10 pt-6 px-8 md:px-8 md:w-2/3 xl:w-1/2 text-center",
    font.className,
  )}
>
  &quot;RemoteFlow adapts to your needs. It&apos;s as minimal or as powerful as you need it to be.&quot;
</motion.div>

<motion.div
  variants={fadeUpVariants}
  custom={7}
  className="items-center flex justify-center flex-col"
>
  <Image
    src="/logos/logoipsum-327.svg"
    alt="Company logo"
    width={1000}
    height={1000}
    className="pt-2 xl:pt-0 w-10 xl:w-14"
  />
  <div className="text-center">
    <div className={`text-sm font-medium pt-4`}>
      Dipesh Dahiya
    </div>
    <div className={`text-sm `}>
      Creator and Manager of RemoteFlow
    </div>
  </div>
</motion.div>

    </motion.div>
  );
};

export default FourthSection;
