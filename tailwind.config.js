/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      raleway: 'Raleway, sans-serif',
      spinnaker: 'Spinnaker, san-serif',
      roboto: 'Roboto, sans-serif',
    },
    extend: {
      screens: {
        mobile: { raw: '(max-width: 767.97px)' },
        tablet: { raw: '(max-width: 1199.98px)' },
      },
      backgroundPosition: {
        '50%': '50% 50%',
      },
      padding: {
        50: '50px',
        100: '100px',
      },
      width: {
        30: '30%;',
      },
      colors: {
        'ez-aem-blue': 'rgb(54, 90, 139)',
        'headwire-link': '#da7b40',
      },
    },
  },
  plugins: [],
};
