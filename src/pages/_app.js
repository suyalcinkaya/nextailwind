import Head from 'next/head'

import 'styles/tailwind.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js & Tailwind CSS Starter Kit</title>
        <meta
          name="description"
          content="This is a Next.js and Tailwind CSS starter kit. It's fully optimized for the utmost performance."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
