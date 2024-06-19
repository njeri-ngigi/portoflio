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
        crumple: "url('/crumple.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jura: ["Jura"],
        jetbrains: ["Jetbrains Mono"],
      },
    },
    colors: {
      cream: "#F3EFE4",
      white: "#FFFFFF",
      lemon: "#FFD600",
      black: "#000000",
      night: "#0C1F28",
    },
    screens: {
      xxxl: { min: "1600px" },
      xxl: { max: "1200px" },
      lg: { max: "1050px" },
      xl: { max: "900px" },
      ml: { max: "800px" },
      m: { max: "700px" },
      s: { max: "550px" },
      xs: { max: "450px" },
      xxs: { max: "320px" },
    },
  },
  plugins: [],
  important: true,
};
export default config;
