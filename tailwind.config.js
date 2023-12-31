/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    screens:{
      "xs":"100px",
      "sm":"640px",
      "md":"786px",
      "lg":"1024px",
      "xl":"1280px",
    },
    extend: {},
  },
  plugins: [],
}

