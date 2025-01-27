"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "../ui/icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get the saved theme from localStorage or use default
    const savedTheme = localStorage.getItem("theme") || "retro";
    setTheme(savedTheme);
    setIsSelected(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsSelected(theme === "dark");
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "retro" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Switch
        isSelected={isSelected}
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
