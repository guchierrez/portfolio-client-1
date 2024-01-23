/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      moonLight: ["moon-light", "sans-serif"],
      moonBold: ["moon-bold", "sans-serif"],
      marketDeco: ["market-deco", "sans-serif"],
    },
  },
  daisyui: {
    themes: ["valentine"],
  },
  plugins: [require("daisyui")],
};
