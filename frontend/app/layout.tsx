import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-epilogue',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quickhire - Discover 5000+ Jobs | Find Your Dream Job',
  description: 'Discover more than 5000+ job opportunities. Find your perfect job match with Quickhire, the ultimate job board platform for career seekers and startups.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={epilogue.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
