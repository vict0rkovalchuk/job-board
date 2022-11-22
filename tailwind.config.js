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
        384564: '#384564',
        '7D859C': '#7D859C',
        '5876C5': '#5876C5',
        B8BBC5: '#B8BBC5',
        '55699E': '#55699E',
        '988B49': '#988B49'
      },
      backgroundColor: {
        'sky-blue': '#E6E9F2',
        EFF0F5: '#EFF0F5',
        E1E6F4: '#E1E6F4',
        FFF8D9: '#FFF8D9',
        E4E5EA: '#E4E5EA'
      },
      opacity: {
        0.13: '0.13'
      },
      spacing: {
        '9px': '9px',
        '17px': '17px',
        '18px': '18px',
        '29px': '29px',
        '30px': '30px',
        '84px': '84px',
        '85px': '85px',
        minus80px: '-80px'
      },
      width: {
        '31px': '31px',
        '85px': '85px',
        '66px': '66px',
        '280px': '280px',
        '360px': '360px',
        '793px': '793px'
      },
      height: {
        '31px': '31px',
        '52px': '52px',
        '85px': '85px',
        '66px': '66px',
        '280px': '280px',
        '360px': '360px'
      },
      minHeight: {
        '164px': '164px',
        '100vh': '100vh',
        '100vhminus58px': 'calc(100vh - 29px - 29px)'
      },
      maxWidth: {
        '100vw': '100vw',
        '500px': '500px',
        '1260px': '1260px',
        '1440px': '1440px'
      },
      fontSize: {
        '10px': '10px',
        '28px': '28px'
      },
      gap: {
        '26px': '26px',
        '11px': '11px',
        '50px': '50px',
        '19px': '19px'
      },
      borderRadius: {
        full: '50%',
        '10.4px': '10.4px'
      },
      letterSpacing: {
        h2: '-0.625px',
        subtitle: '0.23619px',
        'sm-h2': '-0.5625px',
        '0.413333px': '0.413333px'
      },
      minWidth: {
        '146px': '146px',
        '45px': '45px'
      },
      boxShadow: {
        jobitem:
          '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
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
