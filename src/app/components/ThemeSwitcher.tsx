"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "../ui/icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const buttonSize = isSmallScreen ? "md" : "lg";

  // safely show UI once mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const handleThemeToggle = () => {
    setTheme(theme === "purple-dark" ? "orange-light" : "purple-dark");
  };

  return (
    <>
      <Switch
        isSelected={theme === "purple-dark"}
        onValueChange={handleThemeToggle}
        size={buttonSize}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <MoonIcon className={className} />
          ) : (
            <SunIcon className={className} />
          )
        }
      />
    </>
  );
}
