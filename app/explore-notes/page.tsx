"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const ExploreNotes = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Go Back Link */}
            <Link
                href="/community"
                className="fixed z-20 w-50 top-4 right-10 flex items-center bg-transparent text-[18px] py-2 px-4 rounded-full transition-all duration-1000 ease-in-out"
            >
                <span className="mr-2 bold">&#8592;</span>
                Go Back
            </Link>

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center p-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl w-full">
                    <h1 className="text-5xl font-bold mb-4">Explore Free Notes</h1>
                    <p className="text-lg mb-8">
                        Browse through a selection of free study materials across various subjects. Download and use these resources to support your studies without any cost.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ExploreNotes;