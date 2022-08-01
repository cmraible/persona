/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.hbs", "./members/*.hbs", "./partials/*.hbs"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
