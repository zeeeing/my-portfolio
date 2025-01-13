import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [nextui(), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro"],
  },
} satisfies Config;
