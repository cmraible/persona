/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.hbs", "./members/*.hbs", "./partials/*.hbs"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
