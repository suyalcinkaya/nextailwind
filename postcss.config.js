const cssnano = [
  'cssnano',
  {
    preset: 'advanced',
    discardComments: { removeAll: true }
  }
]

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
  }
}
