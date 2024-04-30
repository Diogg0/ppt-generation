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
        "dark-red": "#742121",
        "red-pink": "#FCC8C8",
        "stroke": "#706E6E",
        "dull-peach": "#F2E0E0",
        "hot-pink": "#F48787",
      },

    },
  },
  plugins: [],
};
export default config;
