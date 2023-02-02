/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#003953",
        white: "#D4D4D4",
        green: "#00CE65",
        orange: "#D97706",
        "light-green": "#B3F0D1",
        "text-gradient": "linear-gradient(90deg, #14FF87 0%, #88A9FF 100%)",
      },
      fontFamily: {
        fontMont: "Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
