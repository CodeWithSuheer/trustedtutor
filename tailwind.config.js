/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'false',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          one: '#DB5400',
          two: '#E8A32E',
        },
        secondary: '#FAE9E9',
        accent: '#FAF3F300', // Transparent color, ensure you're handling alpha well
        background: '#FFFFFF',
        dark: '#1f2937',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
}
