// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure Tailwind scans all your JSX/TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto'], // Add Roboto as the default sans-serif font
      },
    },
  },
  plugins: [],
}