module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     fontFamily: {
       'poppins': ['Poppins'],
       'press-start': ['"Press Start 2P"', 'cursive'],
       'roboto': ['"Roboto Mono"'],
      },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
