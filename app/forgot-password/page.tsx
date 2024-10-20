"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const forgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would implement your password reset logic
        // For now, I'll just simulate sending an email
        try {
            // Add your forgot password API call here
            // await forgotPassword(email)
            setIsEmailSent(true);
            // Optionally redirect after a delay
            setTimeout(() => {
                router.push('/sign-in');
            }, 3000);
        } catch (error) {
            alert("Error sending reset email. Please try again.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen cursor-default">

            <Link
                href="/"
                className="fixed z-20 w-50 top-4 right-10 text-white flex items-center bg-transparent text-[18px] py-2 px-4 rounded-full transition-all duration-1000 ease-in-out"
            >
                <span className="mr-2 bold">&#8592;</span>
                Go Back
            </Link>

            <div className="relative flex flex-grow">

                <div className="flex flex-col items-center justify-center w-1/2 p-8">
                    <h2 className="mb-6 text-2xl font-bold">Reset Password</h2>
                    {!isEmailSent ? (
                        <form onSubmit={handleSubmit} className="w-3/4 space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
                            >
                                Send Reset Link
                            </Button>
                        </form>
                    ) : (
                        <div className="w-3/4 p-4 text-center bg-green-100 rounded-md">
                            <p className="text-green-800">
                                If an account exists for {email}, you will receive a password reset
                                link shortly.
                            </p>
                            <p className="mt-2 text-sm text-green-600">
                                Redirecting to login page in 5 seconds...
                            </p>
                        </div>
                    )}
                </div>


                <div
                    className="absolute top-0 right-0 h-full w-1/2 bg-black flex flex-col justify-center items-center shadow-lg"
                    style={{
                        borderRadius: "20vw 0 0 20vw",
                        boxShadow: "0 0 50px 20px rgba(255, 255, 255, 0.1)",
                    }}
                >

                    <img
                        src="assets/MessyDoodle.svg"
                        alt="Forgot Password Illustration"
                        className="h-[30%] object-cover mb-6"
                        style={{
                            filter: "invert(1) sepia(0) saturate(1) hue-rotate(180deg)",
                        }}
                    />


                    <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-300">
                        Forgot Your Password?
                    </h3>


                    <p className="px-4 mb-6 text-center text-white transition-all duration-300">
                        Don't worry! It happens. Please enter your email address and we'll send
                        you a reset link.
                    </p>


                    <Link href="/sign-in">
                        <Button className="px-6 py-2 text-white transition-all duration-300 border rounded-full hover:bg-gray-900">
                            Return to Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default forgotPassword;