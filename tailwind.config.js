const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss,less}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '480px', // => @media (min-width: 480px) { ... }
      sm: '576px', // => @media (min-width: 576px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '992px', // => @media (min-width: 992px) { ... }
      xl: '1200px', // => @media (min-width: 1200px) { ... }
      xxl: '1600px' // => @media (min-width: 1600px) { ... }
    },
    extend: {
      colors: {
        'color-primary': '#039be5',
        'color-secondary': '#29b6f6',
        'color-agent': '#d81b60',
        'color-success': '#43a047',
        'color-warning': '#fb8c00',
        'color-error': '#e53935',
        'bg-white': '#fafafa',
        'bg-black': '#1e1e1e',
        'bg-gray': '#565656',
        'txt-white': '#f5f5f5',
        'txt-black': '#000000',
        'txt-grey': '#374151'
      },
      fontFamily: {
        'body-font': ['Inter', 'sans-serif'],
        'title-font': ['Poppins', 'serif']
      },
      fontSize: {
        'h1-font-size': '2rem',
        'h2-font-size': '1.5rem',
        'h3-font-size': '1.17rem',
        'h4-font-size': '1rem',
        'normal-font-size': '0.938rem',
        'small-font-size': '0.813rem',
        'smaller-font-size': '0.75rem',
        'tiny-font-size': '0.625rem'
      },
      fontWeight: {
        'font-normal': '400',
        'font-medium': '500',
        'font-semi-bold': '600',
        'font-bold': '800'
      },
      zIndex: {
        'z-normal': '1',
        'z-tooltip': '10',
        'z-fixed': '100'
      }
    }
  },
  plugins: []
});
