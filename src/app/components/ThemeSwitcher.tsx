"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "../ui/icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
        size="lg"
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
