module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {}, // Enable nesting before Tailwind CSS
    'tailwindcss': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': true },
    },
  }
}