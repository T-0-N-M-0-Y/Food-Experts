/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ed66f9",

          "secondary": "#ed7886",

          "accent": "#68d8b8",

          "neutral": "#23333E",

          "base-100": "#FDFCFD",

          "info": "#6EDEF7",

          "success": "#10753F",

          "warning": "#AB7E0D",

          "error": "#EA535A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

