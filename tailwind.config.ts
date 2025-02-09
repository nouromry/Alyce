import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcc4d3",
        secondary: "#FF5789",
        teritiary: "#C2C0FF",
        quaternary :"#FF8EB02B",
        quinary :"#C75C89",
        grey: "#CCCCCC",
        darkGrey: "#353535",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
