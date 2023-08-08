/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
    addComponents({
      '.card': {
       
        borderRadius: theme('borderRadius.lg'),
        padding: theme('spacing.6'),
        boxShadow: theme('boxShadow.xl'),
      }
    })
      }
    )
  ]
  
}

