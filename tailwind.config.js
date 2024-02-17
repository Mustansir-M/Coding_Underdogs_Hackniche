module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 300: "#7c8db5", "300_1e": "#7c8db51e" },
        black: { 900: "#000000" },
        blue: {
          50: "#e6edff",
          600: "#347ae2",
          "50_00": "#e6edff00",
          "50_01": "#e6eeff",
        },
        red: { 500: "#ff3b30" },
        orange: { 500: "#ff9500" },
        white: { A700: "#ffffff" },
        green: { 500: "#34c759" },
        gray: { 100: "#f2f2f2" },
      },
      boxShadow: { bs: "0px 2px  10px 0px #7c8db51e" },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: { gradient: "linear-gradient(0deg ,#e6edff,#e6edff00)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
