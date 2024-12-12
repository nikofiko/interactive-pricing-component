/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        man: ["Manrope"], // Fixed the syntax
      },
      colors: {
        'gray-text': 'hsl(225, 20%, 60%)',
        'slider-green': 'hsl(174, 86%, 45%)',
        'button': 'hsl(227, 35%, 25%)',
      },
      boxShadow: {
        'custom': '-80px 0 0 80px #43e5f7',
      },
    },
  },
  plugins: [],
};
