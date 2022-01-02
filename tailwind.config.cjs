module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
    colors: {
      black: '#242331',
      grey: '#8693AB',
      'grey-light': '#E7E9EF',
      white: '#FCFFFC',
      red: '#DB504A',
      green: '#2E8A70',
      'red-light': '#EF767A',
    },
    fontFamily: {
      lato: 'Lato, sans-serif',
      'noto-sans': 'Noto Sans, sans-serif',
    },
    fontSize: {
      'sm': ['14px', { lineHeight: '21px', letterSpacing: '-0.02em' }],
      'base': ['16px', { lineHeight: '22px', letterSpacing: '-0.02em' }],
      'lg': ['18px', { lineHeight: '27px', letterSpacing: '-0.014em' }],
      'xl': ['28px', { lineHeight: '36px', letterSpacing: '-0.008em' }],
      '2xl': ['36px', { lineHeight: '42px', letterSpacing: '-0.004em' }],
    },
  }
}
