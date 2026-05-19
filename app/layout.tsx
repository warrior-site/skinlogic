import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'SkinLogic — Science-Based Simple Solutions for Your Skin Problems',
  description:
    'Every product recommendation is backed by ingredient science, not brand deals. Find solutions for acne, oily skin, pigmentation, hair fall, and more.',
  keywords: 'skincare india, acne treatment india, oily skin serum, niacinamide india, hair fall solution',
  openGraph: {
    title: 'SkinLogic — Science-Based Skincare',
    description: 'We read the science so you don\'t have to.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}