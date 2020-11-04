import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Next.js & Tailwind CSS Starter Kit</title>
          <meta
            name="description"
            content="This is a Next.js and Tailwind CSS starter kit. It's fully optimized for the utmost performance."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
