const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['src/components/**/*.js', 'src/pages/**/*.js'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  }
]

const cssnano = [
  'cssnano',
  {
    preset: 'advanced',
    discardComments: { removeAll: true }
  }
]

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : [])
  ]
}
