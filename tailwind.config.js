module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#050100',
          2: '#282424',
          3: '#3b3b3b',
        },
        primary: {
          1: '#7B071C',
          2: '#CB0101',
          3: '#F14A03',
          4: '#FE6D00',
          5: '#000000',
        },
      },
    },
  },
  plugins: [],
  variants: {},
}
