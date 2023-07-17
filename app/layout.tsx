import './globals.css'
import { Poppins, Roboto_Mono } from 'next/font/google';
import Navbar from './components/Navbar' 
import BackToTopButton from './components/BackToTopButton' 
import  type { Metadata } from 'next'



const poppins = Poppins({ 
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: "--font-poppins"
})

const roboto_mono = Roboto_Mono({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  variable: "--font-roboto_mono"
})

export const metadata: Metadata = {
  title: 'Marcin Wojtczak',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto_mono.variable} ${poppins.variable} bg-[#212F45]` }>
        <BackToTopButton />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
