const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  // purge: {
  //   enabled: true,
  //   content: [
  //     "./pages/**/*.{js,ts,jsx,tsx}",
  //     "./components/**/*.{js,ts,jsx,tsx}",
  //     "./app/**/*.{js,ts,jsx,tsx}",
  //     "./src/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   options: { safelist: ["dark"] },
  // },
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
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    opacity: ["not-hover"],
  },
};
