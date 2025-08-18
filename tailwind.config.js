/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    screens: {
      sm: "38rem",
    },
    fontFamily: {
      Pretendard: ["Pretendard"],
    },
  },
  plugins: [],
  darkMode: "class",
};
