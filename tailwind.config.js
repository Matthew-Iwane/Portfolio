/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    keyframes : {
      mybounce : {
        '0%' : { transform: 'translateY(20px)' },
        '100%' : { transform: 'translateY(0px)' }
      }
    }
  },
  plugins: [],
}