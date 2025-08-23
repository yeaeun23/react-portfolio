/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-1deg)" },
          "40%": { transform: "rotate(1deg)" },
          "60%": { transform: "rotate(-1deg)" },
          "80%": { transform: "rotate(1deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 2s ease-in-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
