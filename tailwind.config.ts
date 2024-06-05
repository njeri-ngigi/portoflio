import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jura: ["Jura"],
        jetbrains: ["Jetbrains Mono"],
      },
      keyframes: {
        width: {
          "0%": { width: "0%", paddingLeft: "0px" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "width-grow": "width 2s ease-in-out",
      },
    },
    colors: {
      cream: "#F3EFE4",
      forest: "#242E1F",
      white: "#FFFFFF",
      lemon: "#FFD600",
      black: "#000000",
    },
  },
  plugins: [],
  important: true,
};
export default config;
