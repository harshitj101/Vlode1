/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        Pacifico: ["Pacifico", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        darkGray: "#242424",
        lightBeige: "#f7f4ed",
        mediumGray: "#6b6b6b",
      },
      animation: {
        "spin-slow": "spin 3s ease infinite",
      },
    },
  },
  plugins: [],
};
