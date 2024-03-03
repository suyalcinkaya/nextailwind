const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/app/**/*.{js,ts,jsx,tsx,mdx,json}', 'src/components/**/*.{js,ts,jsx,tsx,mdx,json}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans]
      },
      height: {
        'dynamic-screen': '100dvh'
      },
      minHeight: {
        'dynamic-screen': '100dvh'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
}
