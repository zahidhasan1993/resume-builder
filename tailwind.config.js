/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        smooch: ['Smooch', 'sans-serif'],
        agbalumo: ['Agbalumo', 'sans-serif']
      }
    },
  },
  plugins: [],
}