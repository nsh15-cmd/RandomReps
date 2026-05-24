/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], 
        body: ['Plus Jakarta Sans', 'sans-serif'], 
      },
      colors: {
        brand: {
          black: '#242021',
          white: '#FFFFFF',
          gray: '#F0F0F0', 
          textMuted: '#666666', 
        },
        accent: {
          star: '#FFC633', 
          discountBg: '#FFEEEE', 
          discountText: '#FF3333', 
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem', 
      }
    },
  },
  plugins: [],
}