import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import FloatingLogo from '@/components/FloatingLogo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Limitless Grit',
  description: 'Your greatest stories are yet to be told.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        <FloatingLogo />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
