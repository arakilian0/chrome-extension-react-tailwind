const pkg = require('./package.json')

module.exports = {
  content: [
    `./${pkg.config.entry}/**/*.{js,jsx,html}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}