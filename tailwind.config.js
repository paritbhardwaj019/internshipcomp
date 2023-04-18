/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        graphik: "Graphik",
      },
      fontSize: {
        "2.5xl": "28px",
      },
      width: {
        8.5: "34px",
      },
      height: {
        8.5: "34px",
      },
      colors: {
        cyan: "#5866e3",
      },
      height: {
        "sidebar-height": "calc(100vh - 56px)",
      },
    },
  },
  plugins: [],
};
