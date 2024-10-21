"use client";
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer"; // Assuming you have a Footer component
import Link from "next/link"; // For navigation links
import { motion } from "framer-motion";
import PreLoader from "@/components/loadingscreen"; // Assuming PreLoader is a loading component


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

const Community = () => {
    const [loading, setLoading] = useState(true);

    // Simulate a loading duration (e.g., 2 seconds) before showing the page content
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the duration as needed

        return () => clearTimeout(timeout); // Cleanup the timeout
    }, []);

    if (loading) {
        return <PreLoader />; // Show PreLoader while loading
    }

    return (
        <div className="flex flex-col min-h-screen cursor-default">
            {/* Navbar at the top */}
            <Link
                href="/"
                className={`fixed z-20 w-50 top-4 right-10 flex items-center bg-transparent text-[18px] py-2 px-4 rounded-full transition-all duration-1000 ease-in-out`}
            >
                <span className={`mr-2 bold `}>
                &#8592;
                </span>
                Go Back
            </Link>

            {/* Title with animation */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                custom={0}
                className="text-5xl font-bold text-center mt-20"
            >
                Community
            </motion.div>
            
            {/* Main content area */}
            <div className="mt-20 mb-20 w-[100vw] flex-grow flex-col flex items-center justify-center gap-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] mx-auto">
                    {/* First row - two boxes */}

                    {/* Buy Notes */}
                    <Link href="/buy-notes" passHref>
                        <motion.div
                            className="relative group w-full h-[60vh] bg-gray-100 rounded-lg shadow-lg cursor-pointer overflow-hidden"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            custom={1}
                        >
                            <img
                                src="/assets/DancingDoodle.svg"
                                alt="Buy Notes"
                                className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-100 group-hover:opacity-0 duration-300 ease-in-out"
                            />
                            <img
                                src="/assets/SprintingDoodle.svg"
                                alt="Buy Notes Hover"
                                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-white bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <h3 className="text-3xl text-black md:text-4xl font-medium">Buy Notes</h3>
                                <p className="text-base text-black md:text-lg mt-4">Find and purchase quality notes easily.</p>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Sell Notes */}
                    <Link href="/sell-notes" passHref>
                        <motion.div
                            className="relative group w-full h-[60vh] bg-gray-100 rounded-lg shadow-lg cursor-pointer overflow-hidden"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            custom={2}
                        >
                            <img
                                src="/assets/DogJumpDoodle.svg"
                                alt="Sell Notes"
                                className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-100 group-hover:opacity-0 duration-300 ease-in-out"
                            />
                            <img
                                src="/assets/DumpingDoodle.svg"
                                alt="Sell Notes Hover"
                                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-white bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <h3 className="text-3xl text-black md:text-4xl font-medium">Sell Notes</h3>
                                <p className="text-base text-black md:text-lg mt-4">Sell your notes and share knowledge with others.</p>
                            </div>
                        </motion.div>
                    </Link>
                </div>

                {/* Second row - one box */}
                <motion.div
                    className="relative group w-full md:w-[50%] h-[60vh] bg-gray-100 rounded-lg shadow-lg cursor-pointer overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants}
                    custom={3}
                >
                    <Link href="/explore-notes" passHref>
                        <img
                            src="/assets/ReadingDoodle.svg"
                            alt="Explore Free Notes"
                            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-100 group-hover:opacity-0 duration-300 ease-in-out"
                        />
                        <img
                            src="/assets/MeditatingDoodle.svg"
                            alt="Explore Free Notes Hover"
                            className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        />
                    </Link>
                    <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-white bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                        <h3 className="text-3xl text-black md:text-4xl font-medium">Explore Free Notes</h3>
                        <p className="text-base text-black md:text-lg mt-4">Browse and download free study materials.</p>
                    </div>
                </motion.div>
            </div>
            
            {/* Footer at the bottom */}
            <div className="border-t-2 border-gray-300">
                <Footer />
            </div>
        </div>
    );
};

export default Community;

