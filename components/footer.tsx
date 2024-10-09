"use client";

import {
  PiInstagramLogoFill,
  PiFacebookLogoFill,
  PiYoutubeLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUpVariants}
      className="flex flex-col items-center px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] pb-10"
    >
      <div className="text-2xl font-bold py-4">REMOTEFLOW</div>
      <div className="flex space-x-4 py-4">
        <Link href="https://www.instagram.com" target="_blank">
          <PiInstagramLogoFill className="text-2xl text-gray-500 hover:text-black transition-colors" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <RiTwitterXFill className="text-2xl text-gray-500 hover:text-black transition-colors" />
        </Link>
        <Link href="https://www.facebook.com" target="_blank">
          <PiFacebookLogoFill className="text-2xl text-gray-500 hover:text-black transition-colors" />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <PiYoutubeLogoFill className="text-2xl text-gray-500 hover:text-black transition-colors" />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank">
          <PiLinkedinLogoFill className="text-2xl text-gray-500 hover:text-black transition-colors" />
        </Link>
      </div>
      <div className="flex space-x-4 py-4">
        <Link href="/community" className="hover:underline">
          Community
        </Link>
        <Link href="/sign-in" className="hover:underline">
          Login
        </Link>
      </div>
      <div className="flex space-x-4 py-4">
        <a
          href="mailto:brijestdahiya@gmail.com"
          className="text-gray-500 hover:text-black"
        >
          <AiOutlineMail className="text-2xl" />
        </a>
        <a href="tel:+7496801160" className="text-gray-500 hover:text-black">
          <AiOutlinePhone className="text-2xl" />
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
