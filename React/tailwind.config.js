module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      
     },
     fontWeight:{
      'medium': 'bold',
     },
     height:{
        'fif':'75%'
     },
     marginTop:{
       "6":"100px",
       "lg-6":'100px'
     },
    colors: {
      'priamry':'#23f649',
    },
    extend: {
      colors: {
        selectColor:"#D9D9D9",
        selecttextColor:"#64748b",
        blackColor:"#0f172a"
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        sm:'100px',
        md: '991px',
        laptop: '1050px',
        desktop: '1400px',
      }
    },
  },
  plugins: [],
}