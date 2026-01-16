import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Edgen Institute - Where Great Teachers Meet Curious Minds',
  description: 'Edgen Institute connects passionate educators with learners through a transparent and trusted education ecosystem.',
  keywords: 'online education, teachers, tutors, learning platform, Edgen Institute',
  authors: [{ name: 'Edgen Institute' }],
  openGraph: {
    title: 'Edgen Institute - Where Great Teachers Meet Curious Minds',
    description: 'Edgen Institute connects passionate educators with learners through a transparent and trusted education ecosystem.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edgen Institute - Where Great Teachers Meet Curious Minds',
    description: 'Edgen Institute connects passionate educators with learners through a transparent and trusted education ecosystem.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}




