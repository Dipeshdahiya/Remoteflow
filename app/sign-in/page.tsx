"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const router = useRouter();

  // Sign Up state
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Login state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Handle Sign Up → workspace
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Data:", signUpData); // Debug only
    router.push("/workspace"); // ✅ No API call, direct redirect
  };

  // Handle Log In → workspace
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", loginData); // Debug only
    router.push("/workspace"); // ✅ No API call, direct redirect
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Left side - Sign Up */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8">
          <h2 className="mb-6 text-4xl font-bold">Sign Up</h2>
          <form onSubmit={handleSignUpSubmit} className="w-3/4 space-y-4">
            <input
              type="text"
              value={signUpData.name}
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
              className="block w-full px-4 py-3 border border-gray-300 rounded-3xl"
              required
              placeholder="Name"
            />
            <input
              type="email"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
              className="block w-full px-4 py-3 border border-gray-300 rounded-3xl"
              required
              placeholder="Email"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                className="block w-full px-4 py-3 border border-gray-300 rounded-3xl"
                required
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-500 right-2 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Button
              type="submit"
              className="w-full py-3 text-white bg-black rounded-3xl hover:bg-gray-800"
            >
              Sign Up
            </Button>
          </form>
        </div>

        {/* Right side - Login */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8">
          <h2 className="mb-6 text-4xl font-bold">Log In</h2>
          <form onSubmit={handleLoginSubmit} className="w-3/4 space-y-4">
            <input
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="block w-full px-4 py-3 border border-gray-300 rounded-3xl"
              required
              placeholder="Email"
            />
            <div className="relative">
              <input
                type={showLoginPassword ? "text" : "password"}
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="block w-full px-4 py-3 border border-gray-300 rounded-3xl"
                required
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                className="absolute text-gray-500 right-2 top-1/2 -translate-y-1/2"
              >
                {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Button
              type="submit"
              className="w-full py-3 text-white bg-black rounded-3xl hover:bg-gray-800"
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
