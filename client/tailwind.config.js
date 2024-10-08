/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx'],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        
        animation:{
          fadeIn: 'fadeIn 1s ease-in-out',
        }
      },
      
      colors: {
        
        "primary-color": "var(--primary-color)",
        
      },

    },
  },
  plugins: [],
}

