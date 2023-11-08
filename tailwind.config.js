/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        love: "'Love Ya Like A Sister', cursive",
      }
    },
  },
  plugins: [require("daisyui")],
}

