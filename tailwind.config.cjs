/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      colors: {
        'base-black': '#252525'
      },
      border: {
        glass: '1px solid rgba(255, 255, 255, 0.3)'
      },
      fontSize: {
        4.5: '4.5vw',
        4: '4vw',
        3.5: '3.5vw',
        3: '3vw',
        2.5: '2.5vw',
        2: '2vw',
        1.5: '1.5vw',
        1: '1vw'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
};
