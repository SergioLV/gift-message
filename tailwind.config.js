/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          slideUpDown: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' },
          },
        },
        animation: {
          slideUpDown: 'slideUpDown 0.5s forwards',
        }
      },
    },
    plugins: [],
  }