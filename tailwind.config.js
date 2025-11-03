/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#f97316' } // orange-500
        }
      },
      animation: {
        blink: 'blink 2s infinite'
      }
    },
  },
  plugins: [],
}