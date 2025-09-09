import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Inria_Serif } from 'next/font/google'
import Navigation from '@/components/Navigation'
import FloatingLogo from '@/components/FloatingLogo'
import './globals.css'

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '700'],
  variable: '--font-inria-serif',
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
      <body className={`${GeistSans.variable} ${inriaSerif.variable} font-geist antialiased`}>
        <FloatingLogo />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
