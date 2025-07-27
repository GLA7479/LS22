/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FACC15",
        secondary: "#1F2937",
        dark: "#0D0D0D",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(250, 204, 21, 0.7)",
      },
    },
  },
  plugins: [],
};
