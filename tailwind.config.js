/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // green pallete
        'green-pallete-100': "#dad7cd",
        'green-pallete-200': "#a3b18a",
        'green-pallete-300': "#588157",
        'green-pallete-400': "#3a5a40",
        'green-pallete-500': "#344e41",
        // blue + green pallete
        'blue-pallete-100': "#f0f3bd",
        'blue-pallete-200': "#02c39a",
        'blue-pallete-300': "#00a896",
        'blue-pallete-400': "#028090",
        'blue-pallete-500': "#05668d"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
