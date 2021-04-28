module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      //'2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      //'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '480px'},
      // => @media (max-width: 479px) { ...}
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
