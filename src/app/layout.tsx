import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JusticeConnect - Botswana Justice Department',
  description: 'Modern digital platform for Botswana courts with case management, document processing, and scheduling tools.',
  keywords: 'justice, courts, botswana, case management, legal, judiciary',
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
    title: 'JusticeConnect - Botswana Justice Department',
    description: 'Modern digital platform for Botswana courts with case management, document processing, and scheduling tools.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'JusticeConnect',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JusticeConnect - Botswana Justice Department',
    description: 'Modern digital platform for Botswana courts with case management, document processing, and scheduling tools.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 