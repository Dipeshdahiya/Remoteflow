"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Lora({
    subsets: ["latin"],
    weight: ["400"],
});

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

const ThirdSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            custom={0}
            className="xl:pt-32 pt-24 relative flex justify-center items-center flex-col"
        >
            <motion.div
                className="xl:text-5xl text-3xl 2xl:w-3/5 w-3/5 font-medium xl:w-1/3 mx-auto text-center"
                variants={fadeUpVariants}
                custom={1}
            >
                Simplify your workspace. Boost your productivity.
            </motion.div>

            <motion.div
                className="pt-10 xl:pt-10 xl:w-1/3 w-4/5"
                variants={fadeUpVariants}
                custom={2}
            >
                <Image
                    src="/assets/canva-logo.png"
                    alt="Canva logo"
                    width={1000}
                    height={1000}
                />
            </motion.div>

            <motion.div
                className={cn(
                    'flex items-center justify-center text-xl xl:text-2xl pt-10 pb-4 xl:py-10 px-8 text-center w-4/5',
                    font.className
                )}
                variants={fadeUpVariants}
                custom={3}
            >
                &quot;RemoteFlow has replaced multiple tools, streamlining our workflow and saving us time.&quot;
            </motion.div>

            <motion.div
                className="items-center flex justify-center flex-col"
                variants={fadeUpVariants}
                custom={4}
            >
                <Image
                    src="/logos/logoipsum-327.svg"
                    alt="RemoteFlow logo"
                    width={1000}
                    height={1000}
                    className="pt-2 xl:pt-0 w-10 xl:w-14"
                />
                <div className="text-center">
                    <div className="text-sm font-medium pt-4">Dipesh Dahiya</div>
                    <div className="text-sm">Creator and Manager of RemoteFlow</div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ThirdSection;
