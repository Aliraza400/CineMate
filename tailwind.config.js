/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {

        "other": {'min': '340px', 'max': '1200px'},
        "small": {'min': '340px', 'max': '700px'},
      },
      colors: {
        darkBg: "#1E293B"
      }
    },
  },
  plugins: [],
}