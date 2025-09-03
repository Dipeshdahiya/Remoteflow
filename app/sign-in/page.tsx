"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const router = useRouter();

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

  const [isPanelMoved, setIsPanelMoved] = useState(false);
  const [imageSrc, setImageSrc] = useState("assets/BalletDoodle.svg");

  // Redirect to /workspace on form submit (no backend check)
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/workspace");
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Login submitted");  // debug
  router.push("/workspace");
};



  const [headingText, setHeadingText] = useState("Welcome Back!");
  const [paragraphText, setParagraphText] = useState(
    "To keep connected with us, please login with your personal info."
  );
  const [buttonText, setButtonText] = useState("Login");

  const togglePanelMove = () => {
    setIsPanelMoved((prev) => !prev);
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
        className={`fixed z-20 w-50 top-4 right-10 ${
          isPanelMoved ? "text-black" : "text-white"
        } flex items-center bg-transparent text-[18px] py-2 px-4 rounded-full transition-all duration-1000 ease-in-out`}
      >
        <span className="mr-2 font-bold">&#8592;</span>
        Go Back
      </Link>

      <div className="relative flex flex-grow">
        {/* Left side for Sign Up */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8">
          <h2 className="mb-6 text-6xl font-bold">Welcome!</h2>
          <h2 className="mb-6 text-lg text-[#6f6e6e] text-center">
            Simplify your workflow and boost your productivity with <br />
            <span className="font-bold text-[#515050]">RemoteFlow</span>. Get
            started for free.
          </h2>
          <form onSubmit={handleSignUpSubmit} className="w-3/4 space-y-4">
            <input
              type="text"
              id="name"
              name="name"
              value={signUpData.name}
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
              className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-3xl"
              required
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
              className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-3xl"
              required
              placeholder="Email"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-3xl"
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

        {/* Right side for Login */}
        <div className="relative flex flex-col items-center justify-center w-1/2 p-8">
          <h2 className="mb-6 text-6xl font-bold">Welcome back!</h2>
          <form onSubmit={handleLoginSubmit} className="w-3/4 space-y-4">
            <input
              type="email"
              id="loginEmail"
              name="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-3xl"
              required
              placeholder="Email"
            />
            <div className="relative">
              <input
                type={showLoginPassword ? "text" : "password"}
                id="loginPassword"
                name="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="block w-full px-4 py-3 mt-1 border border-gray-300 rounded-3xl"
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

        {/* Animated Panel */}
        <div
          className={`absolute top-0 ${
            isPanelMoved ? "right-1/2" : "right-0"
          } h-full w-1/2 bg-black flex flex-col justify-center items-center transition-all duration-1000`}
          style={{
            borderRadius: isPanelMoved ? "0 20vw 20vw 0" : "20vw 0 0 20vw",
          }}
        >
          <img src={imageSrc} alt="Image" className="h-[30%] mb-6" />
          <h3 className="mb-4 text-2xl font-bold text-white">{headingText}</h3>
          <p className="px-4 mb-6 text-center text-white">{paragraphText}</p>
          <Button
            className="px-6 py-2 text-white border rounded-full"
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
