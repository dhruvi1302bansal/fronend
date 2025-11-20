/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        vedara: {
          green: '#2C3E30',    // Deep Moss Green
          clay: '#C0775E',     // Terracotta
          sand: '#F3F1EB',     // Warm background
          gold: '#D4AF37',     // Accent
          light: '#FAF9F6',    // Off-white
        }
      }
    },
  },
  plugins: [],
}