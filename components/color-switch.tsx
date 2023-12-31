"use client";

import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

import { useTheme } from "@/context/theme-context";

export default function ColorSwitch() {
  const { colorTheme, onSwitchColor } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] borderBlack shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:border dark:border-white dark:border-opacity-40 dark:bg-gray-950"
      onClick={onSwitchColor}
    >
      {colorTheme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
