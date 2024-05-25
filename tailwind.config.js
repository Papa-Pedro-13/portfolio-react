/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grays: '#A6A6A6'
      },
      backgroundImage: {
        mainGradient: 'linear-gradient(93.74deg, #FA5252 0%, #DD2476 100%)'
      },
    },
    plugins: [],
  }
}
