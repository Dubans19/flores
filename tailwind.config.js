/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#d4a023', // Color dorado del menú superior y otros detalles
        red: '#e20613', // Color rojo de los botones
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Tipografía utilizada
      },
    },
  },
  plugins: [],
}