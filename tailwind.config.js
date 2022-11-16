/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        '3A4562': '#3A4562',
        '878D9D': '#878D9D',
        D8D8D8: '#D8D8D8',
        '70778B': '#70778B',
        '38415D': '#38415D',
        384564: '#384564'
      },
      backgroundColor: {
        'sky-blue': '#E6E9F2',
        EFF0F5: '#EFF0F5'
      },
      spacing: {
        '9px': '9px',
        '29px': '29px',
        '85px': '85px'
      },
      width: {
        '85px': '85px',
        '66px': '66px'
      },
      height: {
        '85px': '85px',
        '66px': '66px'
      },
      minHeight: {
        '164px': '164px',
        '100vh': '100vh'
      },
      maxWidth: {
        '100vw': '100vw',
        '1440px': '1440px'
      },
      gap: {
        '26px': '26px',
        '11px': '11px',
        '50px': '50px',
        '19px': '19px'
      },
      borderRadius: {
        full: '50%'
      },
      letterSpacing: {
        h2: '-0.625px',
        subtitle: '0.23619px',
        'sm-h2': '-0.5625px'
      },
      minWidth: {
        '138px': '138px',
        '45px': '45px'
      },
      boxShadow: {
        jobitem:
          '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
      },
      fontSize: {
        '10px': '10px'
      },
      screens: {
        lg: { max: '1023px', min: '639px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' }
        // => @media (max-width: 639px) { ... }
      }
    }
  },
  plugins: []
};
