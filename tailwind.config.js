/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: 'Lexend',
        fira: 'Fira Sans'
      },
      backgroundImage: {

        banner: 'url("https://i.ibb.co.com/zGTrZ80/hero.jpg")',
      }
    },
  },
  plugins: [],
}

