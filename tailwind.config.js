/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [`'Goudy Bookletter 1911'`, ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
