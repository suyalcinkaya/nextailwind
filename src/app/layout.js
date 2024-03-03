import '@/globals.css'
import { GeistSans } from 'geist/font/sans'

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main className="bg-grid">{children}</main>
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://nextailwindcss.vercel.app/'),
  robots: {
    index: true,
    follow: true
  },
  title: 'Next.js & Tailwind CSS Starter Kit',
  description: "This is a Next.js and Tailwind CSS starter kit. It's fully optimized for the utmost performance.",
  openGraph: {
    title: 'Next.js & Tailwind CSS Starter Kit',
    description: "This is a Next.js and Tailwind CSS starter kit. It's fully optimized for the utmost performance.",
    alt: "This is a Next.js and Tailwind CSS starter kit. It's fully optimized for the utmost performance.",
    type: 'website',
    url: '/',
    siteName: 'nextailwind',
    locale: 'en_IE'
  },
  alternates: {
    canonical: '/'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@onurschu',
    creator: '@onurschu'
  },
  other: {
    pinterest: 'nopin'
  }
}
