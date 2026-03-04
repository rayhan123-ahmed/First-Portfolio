/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // all your HTML files
  theme: {
    // <-- Put your container settings here
    container: {
      center: true,
      padding: "1rem",
      screens: {
        // responsive max-widths
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1320px",
      },
    },
    extend: {}, // other customizations
  },
  plugins: [],
};
