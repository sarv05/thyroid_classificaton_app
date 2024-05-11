/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sarv:{
          400:"#ff4a3c",
        },
      },
    },
  },
  plugins: [],
}