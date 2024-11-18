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
        "bg-blue": "#007BFC",
      },
      backgroundImage: {
        layoutGradient:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
        progressBar: 'url("/imgs/level-full.svg")',
        ratingHeader:
          'url("/imgs/header-bg.png"), linear-gradient(0deg, #3599FF, #3599FF)',
        successApartmentSell:
          'url("/imgs/success-sell-bg.png"), linear-gradient(0deg, #007BFC, #007BFC)',
      },
      backgroundSize: {
        ratingHeaderSize: "50%, 100%",
      },
      fontFamily: {
        cofo: "CoFo Sans",
      },
      keyframes: {
        coinDisappear: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-65px)", opacity: "0" },
        },
      },
      animation: {
        coinDisappear: "coinDisappear 1s forwards 0s",
      },
    },
  },
  plugins: [],
};
export default config;
