/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        condensed: ["condensed", "serif"],
        work: ["Work Sans", "sans-serif"],
        devant: ["devant", "sans-serif"]
      },
    },
  },
  plugins: [
    
  ],
}
