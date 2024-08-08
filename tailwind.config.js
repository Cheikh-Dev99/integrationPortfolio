/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        g: "#009687",
        w: "#ffffff",
        y: "#FE9800",
      },
      backgroundImage: (theme) => ({
        "custom-gradient": "linear-gradient(to bottom, #009687, #ffffff)",
      }),
      fontFamily: {
        // sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
