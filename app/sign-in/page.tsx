"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const AuthPage = () => {
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    // State to track the transition effect
    const [isPanelMoved, setIsPanelMoved] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    // State to handle the image source
    const [imageSrc, setImageSrc] = useState("assets/BalletDoodle.svg"); // Default image

    // Handle input change for sign-up form
    const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value,
        });
    };
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
      };
    // Handle input change for login form
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSignUpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-up submission logic here
    };

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login submission logic here
    };
    const [headingText, setHeadingText] = useState("Welcome Back!");
    const [paragraphText, setParagraphText] = useState(
        "To keep connected with us, please login with your personal info."
    );
    const [buttonText, setButtonText] = useState("Login");

    const togglePanelMove = () => {
        setIsPanelMoved((prev) => !prev);
        // Change image and text when toggling panel
        setImageSrc(
            isPanelMoved ? "assets/BalletDoodle.svg" : "assets/MessyDoodle.svg"
        );
        setHeadingText(isPanelMoved ? "Welcome Back!" : "Hello, Friend!");
        setParagraphText(
            isPanelMoved
                ? "To keep connected with us, please login with your personal info."
                : "Sign up and start your journey with us today."
        );
        setButtonText(isPanelMoved ? "Login" : "Sign Up");
    };

    return (
        <div className="flex flex-col min-h-screen cursor-default">
            {/* Go Back button */}
            <Link
                href="/"
                className={`fixed z-20 w-50 top-4 right-10 ${isPanelMoved ? "text-black" : "text-white"
                    } flex items-center bg-transparent text-[18px] py-2 px-4 rounded-full transition-all duration-1000 ease-in-out`+ (isDarkMode ? "text-white " : "text-white")} 
            >
                <span className={`mr-2 bold `}>
                &#8592;
                </span>
                Go Back
            </Link>
            <div className="flex flex-grow relative">
                {/* Left side for Sign Up */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8">
                    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                    <form onSubmit={handleSignUpSubmit} className="space-y-4 w-3/4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={signUpData.name}
                                onChange={handleSignUpChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={signUpData.email}
                                onChange={handleSignUpChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={signUpData.password}
                                onChange={handleSignUpChange}
                                className="mb-5 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
                                required
                            />
                        </div>
                        <Link href={"/workspace"}>
                        <Button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                        >
                            Sign Up
                        </Button>
                        </Link>
                    </form>
                </div>

                {/* Right side for Login */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8 relative">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form onSubmit={handleLoginSubmit} className="space-y-4 w-3/4">
                        <div>
                            <label htmlFor="loginEmail" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="loginEmail"
                                name="email"
                                value={loginData.email}
                                onChange={handleLoginChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="loginPassword"
                                className="block text-sm font-medium"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="loginPassword"
                                name="password"
                                value={loginData.password}
                                onChange={handleLoginChange}
                                className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                        >
                            <Link href={"/workspace"}>
                            Log In
                            </Link>
                        </Button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link
                            href="/forgot-password"
                            className="text-blue-600 hover:underline"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                {/* Animated Div */}
                <div
                    className={`absolute top-0 ${isPanelMoved ? "right-1/2" : "right-0"
                        } h-full w-1/2 border bg-black flex flex-col justify-center items-center shadow-lg transition-all duration-1000`}
                    style={{
                        borderRadius: isPanelMoved ? "0 20vw 20vw 0" : "20vw 0 0 20vw",
                        boxShadow: "0 0 50px 20px rgba(255, 255, 255, 0.1)",
                    }}
                >

                    {/* Image */}
                    <img
                        src={imageSrc}
                        alt="Image"
                        className="h-[30%] object-cover mb-6"
                        style={{
                            filter: "invert(1) sepia(0) saturate(1) hue-rotate(180deg)",
                        }}
                    />

                    {/* Heading */}
                    <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300">
                        {headingText}
                    </h3>

                    {/* Paragraph */}
                    <p className="text-center text-white mb-6 px-4 transition-all duration-300">
                        {paragraphText}
                    </p>

                    {/* Toggle Button */}
                    <Button
                        className="px-6 py-2 border text-white rounded-full hover:bg-gray-900 transition-all duration-300"
                        onClick={togglePanelMove}
                    >
                        {buttonText}
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;
