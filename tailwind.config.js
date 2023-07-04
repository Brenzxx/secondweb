/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#eab308',
        color1: '#52525b',
        color2: '#7c3aed',
        color3: '#075985',
        color4: '#64748b'
      },

      screens: {
        '2xl': '1320px'
      },
      
    },
  },
  plugins: [],
}

