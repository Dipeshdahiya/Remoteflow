"use client"; // Add this directive to make sure it's treated as a Client Component

import Image from "next/image";
import React from "react";
import { PiArrowRight } from "react-icons/pi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logos = [
  { image: "/logos/logoipsum-265.svg" },
  { image: "/logos/logoipsum-222.svg" },
  { image: "/logos/logoipsum-243.svg" },
  { image: "/logos/logoipsum-258.svg" },
  { image: "/logos/logoipsum-317.svg" },
  { image: "/logos/logoipsum-289.svg" },
  { image: "/logos/logoipsum-297.svg" },
  { image: "/logos/logoipsum-311.svg" },
  { image: "/logos/logoipsum-264.svg" },
  { image: "/logos/logoipsum-264.svg" },
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

const SecondSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleScrollToFifthSection = () => {
    document.getElementById("fifth-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="pt-16 flex justify-center items-center flex-col"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUpVariants}
    >
      <motion.div
        className="text-4xl w-3/4 text-center xl:text-5xl font-medium"
        custom={0}
        variants={fadeUpVariants}
      >
        Trusted by Innovators Worldwide
      </motion.div>

      <motion.div
        className="py-4 xl:w-1/4 text-center px-8"
        custom={1}
        variants={fadeUpVariants}
      >
        RemoteFlow empowers individuals and teams to streamline their workflows, organize information, and collaborate effortlessly.
      </motion.div>

      <motion.div
        className="text-sky-500 flex items-center hover:underline hover:cursor-pointer"
        onClick={handleScrollToFifthSection}
        custom={2}
        variants={fadeUpVariants}
      >
        Explore how RemoteFlow works
        <PiArrowRight className="ml-3 text-sm" />
      </motion.div>

      <motion.div
        className="grid grid-cols-3 xl:grid-cols-4 items-center justify-center px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto"
        custom={3}
        variants={fadeUpVariants}
      >
        {logos.map((logo, index) => (
          <motion.div key={index} className="" custom={index + 4} variants={fadeUpVariants}>
            <Image src={logo.image} alt="logo" width={500} height={500} className="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SecondSection;
