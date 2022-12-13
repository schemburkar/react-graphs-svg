/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {

        //https://www.canva.com/colors/color-palettes/summer-splash/
        "stack-1": "#05445E", //Navy Blue
        "stack-2": "#189AB4", //Blue Grotto
        "stack-3": "#75E6DA", //Blue Green
        "stack-4": "#D4F1F4", //Baby Blue
      }
    }
  }
}

module.exports = config;