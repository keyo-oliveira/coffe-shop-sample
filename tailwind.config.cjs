/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['roboto'],
        'baloo':['"Baloo 2"']
      },
      colors: {
        'brand-purple':'#8047F8',
        'base-text':'#574F4D',
        'base-subtitle':'#403937',
        'brand-yellow-dark':'#C47F17',
        'base-label':'#8D8686'
      },
      backgroundColor: {
        'light-orange': '#F1E9C9',
        'light-purple': '#EBE5F9',
        'brand-dark-purple': '#4B2995',
        'brand-yellow-dark':'#C47F17',
        'base-button': '#E6E5E5',
        'base-card':'#F3F2F2',       
        'base-input':"#EDEDED5C"
      },     
    },
  },
  plugins: [],
}
