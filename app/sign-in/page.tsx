"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { signin, signUp } from "../actions/auth.action";
import { useRouter } from "next/navigation";
import { GoogleButton, GithubButton } from "@/components/button";
import forgotPassword from "../forgot-password/page";
import "@/public/google.svg"
import "@/public/github.svg"

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
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Router
  const router = useRouter();

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
    console.log(signUpData);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };
  // Handle input change for login form
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    console.log("holla man");
    e.preventDefault();
    // Handle sign-up submission logic here
    const { error, success } = await signUp(
      signUpData.name,
      signUpData.email,
      signUpData.password
    );

    if (error) {
      alert(error);
    } else {
      router.replace("/workspace");
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission logic here
    const { error, success } = await signin(
      loginData.email,
      loginData.password
    );

    if (error) {
      alert(error);
    } else {
      router.replace("/workspace");
    }
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
        className={
          `fixed z-20 w-50 top-4 right-10 ${
            isPanelMoved ? "text-black" : "text-white"
          } flex items-center bg-transparent text-[18px] py-2 px-4 rounded-full transition-all duration-1000 ease-in-out` +
          (isDarkMode ? "text-white " : "text-white")
        }
      >
        <span className={`mr-2 bold `}>&#8592;</span>
        Go Back
      </Link>
      <div className="relative flex flex-grow">
        {/* Left side for Sign Up */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8">
          <h2 className="mb-6 text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSignUpSubmit} className="w-3/4 space-y-4">
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
                className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-white dark:text-black"
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
                className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-white dark:text-black "
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  className="block w-full px-4 py-3 mt-1 mb-5 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-white dark:text-black "
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
            >
              Sign Up
            </Button>
            <div className="flex flex-row gap-2">
              <GoogleButton/>
              <GithubButton/>
            </div>
          </form>
        </div>

        {/* Right side for Login */}
        <div className="relative flex flex-col items-center justify-center w-1/2 p-8">
          <h2 className="mb-6 text-2xl font-bold">Login</h2>
          <form onSubmit={handleLoginSubmit} className="w-3/4 space-y-4">
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
                className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
              <div className="relative">
                <input
                  type={showLoginPassword ? "text" : "password"}
                  id="loginPassword"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="block w-full px-4 py-3 mt-1 mb-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2"
                >
                  {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
            >
              <Link href={"/workspace"}>Log In</Link>
            </Button>
            <div className="flex flex-row gap-2">
              <GoogleButton/>
              <GithubButton/>
            </div>
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
          className={`absolute top-0 ${
            isPanelMoved ? "right-1/2" : "right-0"
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
          <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-300">
            {headingText}
          </h3>

          {/* Paragraph */}
          <p className="px-4 mb-6 text-center text-white transition-all duration-300">
            {paragraphText}
          </p>

          {/* Toggle Button */}
          <Button
            className="px-6 py-2 text-white transition-all duration-300 border rounded-full hover:bg-gray-900"
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
