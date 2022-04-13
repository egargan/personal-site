module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
    colors: {
      black: '#242331',
      green: '#2E8A70',
      'green-mid': '#7DD7BE',
      'green-light': '#DBF4ED',
      red: '#DB504A',
      'red-mid': '#EDA19F',
      'red-light': '#FBEAEA',
      'grey-overlay': '#9292A0',
      grey: '#A8A8B3',
      'grey-light-overlay': '#E4E4E7',
      'grey-light': '#F1F1F3',
      white: '#FDFFFC',
    },
    fontFamily: {
      lato: 'Lato, sans-serif',
      'noto-sans': 'Noto Sans, sans-serif',
    },
    fontSize: {
      'sm': ['14px', { lineHeight: '21px', letterSpacing: '-0.02em' }],
      'base': ['16px', { lineHeight: '22px', letterSpacing: '-0.02em' }],
      'lg': ['18px', { lineHeight: '27px', letterSpacing: '-0.014em' }],
      'xl': ['22px', { lineHeight: '28px', letterSpacing: '-0.008em' }],
      '2xl': ['26px', { lineHeight: '36px', letterSpacing: '-0.006em' }],
      '3xl': ['32px', { lineHeight: '42px', letterSpacing: '-0.004em' }],
      '4xl': ['42px', { lineHeight: '48px', letterSpacing: '-0.004em' }],
    },
    extend: {
      screens: {
        container: '840px',
      }
    }
  }
}
