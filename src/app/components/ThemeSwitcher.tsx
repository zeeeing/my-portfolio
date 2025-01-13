"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "../ui/icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const savedTheme = theme || "retro"; // Default theme if no saved theme
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "retro" : "dark"; // Toggle between dark and retro
    setTheme(newTheme); // Set the theme using next-themes
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <Switch
        checked={theme === "dark"}
        color="default"
        size="lg"
        onChange={toggleTheme}
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
