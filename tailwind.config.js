const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  //   "./app/**/*.{js,ts,jsx,tsx}",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-main)", ...fontFamily.sans],
        title: ["var(--font-title)", ...fontFamily.serif],
        source: ["var(--font-source)", ...fontFamily.sans],
      },
    },
    // keyframes: {
    //   blink: {
    //     "50%": { opacity: 0 },
    //   },
    // },
    // animation: {
    //   blink: "blink 1s step-start infinite",
    // },
  },
  plugins: [],
};
