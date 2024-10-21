"use client";
import React from 'react';
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const BuyNotes = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-8">Buy Notes</h1>
                <p className="text-lg mb-8 text-center w-[80%]">
                    Find and purchase study materials. Choose from a wide variety of notes available for different subjects.
                </p>
                <Link href="/community" className="text-blue-500 underline">
                    Go Back to Community
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default BuyNotes;