/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grass: '#78c850',
        poison: '#a040a0',
        fire: '#f08030',
        flying: '#a890f0',
        water: '#6890f0',
        bug: '#a8b820',
        normal: '#a8a878',
        electric: '#f8d030',
        ground: '#e0c068',
        fairy: '#f890f0',
        fighting: '#c03028',
        psychic: '#f85888',
        steel: '#b8b8d0',
        ghost: '#705898',
        dark: '#705848',
        ice: '#b8d8d0',
        dragon: '#7038f8',
        rock: '#b8a038',
      },
    },
  },
  plugins: [],
};
