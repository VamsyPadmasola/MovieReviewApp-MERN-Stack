/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#272727',
        secondary: '#880808',
        ternary: '#909497',
        'dark-subtle': "rgba(255,255,255,0.5)",
        'light-subtle': "#221f1f",
        'grey-subtle': '#909090',
        'red-btn': '#EC493A',
        'orange-btn': '#F08300',
        'blue-btn': '#367588',
        "highlight-dark": '#FFC200',
        "highlight": "#058BFB"
      },
      boxShadow: {
        darkShadow: '0 4px 8px rgba(0, 0, 0, 0.75)',
        lightShadow: '0 4px 8px rgba(0, 0, 0, 0.75)'
      }
    },
  },
  plugins: [],
}
