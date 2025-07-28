import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'JusticeConnect - Modern Justice Platform for Botswana',
  description: 'Transform your court system with JusticeConnect. Advanced case management, document processing, and scheduling tools for the Botswana justice system.',
  keywords: 'justice, courts, botswana, case management, legal, judiciary, digital transformation, court management',
  authors: [{ name: 'JusticeConnect Team' }],
  creator: 'JusticeConnect',
  publisher: 'Botswana Justice Department',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'JusticeConnect - Modern Justice Platform for Botswana',
    description: 'Transform your court system with JusticeConnect. Advanced case management, document processing, and scheduling tools for the Botswana justice system.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'JusticeConnect',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JusticeConnect - Modern Justice Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JusticeConnect - Modern Justice Platform for Botswana',
    description: 'Transform your court system with JusticeConnect. Advanced case management, document processing, and scheduling tools for the Botswana justice system.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} h-full antialiased bg-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 