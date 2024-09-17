"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle"; // Import the DarkModeToggle component

interface ActionButtonsProps {
  setIsDarkMode?: (isDarkMode: boolean) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ setIsDarkMode }) => {
  return (
    <div className="pr-2">
      <div className="flex items-center">
        <Link href={"/sign-in"}>
          <Button
            variant={"outline"}
            className="hidden bg-white text-black dark:bg-black dark:text-white border  lg:flex items-center md:rounded-[5px]"
          >
            Log in
          </Button>
        </Link>
        <DarkModeToggle /> 
      </div>
    </div>
  );
};

export default ActionButtons;
