/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        primary: "#416CFF",
        background: "#f0f2f5",
        "dark-blue": "#071526",
        grey: "#8B949F",
        "grey-1": "#47505B",
      },
    },
  },
  plugins: [],
};
