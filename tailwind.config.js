module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
         blossom: '#EEBECE',
        },
        layout:{
          'blueTop': {left:-377, top: 0, width: '100%', height: '100%'},
        },
        fontFamily: {
          mulish: ["Mulish", "sans-serif"],
        },
      },
    },
    plugins: [],
  }