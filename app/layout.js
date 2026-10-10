import Link from "next/link"
import Navigation from '../components/Navigation'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})


export const metadata = {
  title: "Petsive — A Place for Forever Memories",
  description:
    "A loving place to honor beloved pets, share their stories, and keep their memories alive.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <header className="sticky top-0 z-50 border-b border-[#e5dfd5] bg-[#fbf8f3]/95 px-5 py-3 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight text-[#454139]"
            >
              Petsive
            </Link>
          </div>
        </header>
        <Navigation />
        {children}
      </body>
    </html>
  )
}