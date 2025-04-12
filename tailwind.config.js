/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSerif: ["DMSerifText", "serif"],
        Nabla: ["Nabla", "serif"],
        NotoColorEmoji: ["NotoColorEmoji", "serif"],
      },
    },
  },
  plugins: [],
};
