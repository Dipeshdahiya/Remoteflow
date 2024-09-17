"use client";

import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const GetStartedFree = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUpVariants}
      className="py-20 xl:py-24 flex justify-center items-center flex-col border-b"
    >
      <motion.div
        variants={fadeUpVariants}
        className="text-4xl xl:text-5xl font-medium text-center"
      >
        Start Exploring Today
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        className="py-4 xl:w-1/3 text-center px-10"
      >
        Dive into a world of creativity and organization with Bird. Capture, manage, and share your ideas effortlessly.
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        className="text-sky-500 flex items-center hover:underline hover:cursor-pointer"
      >
        <Link href="/sign-in" className="flex items-center">
          Explore Now <PiArrowRight className="ml-3 text-sm " />
        </Link>
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        className="w-80 pt-10"
      >
        <div className="bg-white rounded-[10px] p-4">
          <Image
            src="/assets/MessyDoodle.svg"
            alt="hero image"
            width={1000}
            height={1000}
            className="w-full rounded-[10px]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GetStartedFree;
