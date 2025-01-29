import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu-sans)"],
        mono: ["var(--font-ubuntu-sans-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        "orange-light": {
          extend: "light", // Inherit from light theme
          colors: {
            background: "#FFEAD4",
            foreground: "#1A1A1A", // Dark text for readability on a light background
            primary: {
              50: "#FFF3E6",
              100: "#FFE5CC",
              200: "#FFCC99",
              300: "#FFB266",
              400: "#FF9933",
              500: "#FB8500", // Base primary color
              600: "#E47700",
              700: "#CC6A00",
              800: "#B35C00",
              900: "#994F00",
              DEFAULT: "#FB8500",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#F1F6F1",
              100: "#E1ECE1",
              200: "#C3D8C3",
              300: "#A5C3A5",
              400: "#87AF87",
              500: "#699A69", // Darker, muted green
              600: "#578058",
              700: "#466646",
              800: "#344D35",
              900: "#243324",
              DEFAULT: "#699A69",
              foreground: "#FFFFFF",
            },
            success: {
              50: "#F0FFF4",
              100: "#D9FFE5",
              200: "#B3FFCA",
              300: "#8DFFB0",
              400: "#66FF96",
              500: "#33E675", // Green for success
              600: "#2FCC68",
              700: "#28B35A",
              800: "#22994D",
              900: "#1B803F",
              DEFAULT: "#33E675",
              foreground: "#FFFFFF",
            },
            warning: {
              50: "#FFF7E6",
              100: "#FFEDCC",
              200: "#FFD999",
              300: "#FFC566",
              400: "#FFB133",
              500: "#FFA000", // Deeper orange for warnings
              600: "#E69100",
              700: "#CC8100",
              800: "#B37200",
              900: "#995F00",
              DEFAULT: "#FFA000",
              foreground: "#FFFFFF",
            },
            danger: {
              50: "#FFECEC",
              100: "#FFD9D9",
              200: "#FFB3B3",
              300: "#FF8D8D",
              400: "#FF6666",
              500: "#FF4D4D", // Vivid red for danger
              600: "#E64545",
              700: "#CC3E3E",
              800: "#B33636",
              900: "#992E2E",
              DEFAULT: "#FF4D4D",
              foreground: "#FFFFFF",
            },
            focus: "#FFB133", // Slightly lighter than primary for focus elements
          },
        },
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
} satisfies Config;
