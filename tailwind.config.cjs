/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      boxShadow: {
        around: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
