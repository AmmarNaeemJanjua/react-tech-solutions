/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/src/assets/images/hero_section.jpg')",
        "contact-img": "url('/src/assets/images/contact_section.jpg')",
      },
      fontFamily: {
        sans: ["Manrope", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        primary: "#416CFF",
        "dark-blue": "#071526",
        grey: "#d1d5db",
        "grey-1": "#85919f",
      },
    },
  },
  plugins: [],
};
