"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

type ColorTheme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  colorTheme: ColorTheme;
  onSwitchColor: () => void;
};

const ColorThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("light");

  const onSwitchColor = () => {
    if (colorTheme === "light") {
      setColorTheme("dark");
      window.localStorage.setItem("colorTheme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setColorTheme("light");
      window.localStorage.setItem("colorTheme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localColorTheme = window.localStorage.getItem(
      "colorTheme"
    ) as ColorTheme | null;

    if (localColorTheme) {
      setColorTheme(localColorTheme);

      if (localColorTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setColorTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ColorThemeContext.Provider
      value={{
        colorTheme,
        onSwitchColor,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ColorThemeContext);

  if (context === null) {
    throw new Error("useTheme needs to be used within ThemeContextProvider");
  }

  return context;
}
