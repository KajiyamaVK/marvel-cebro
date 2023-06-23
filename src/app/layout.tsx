import './globals.css'
import { Inter } from 'next/font/google'
import { Marvel } from "next/font/google" 
import Topbar from './components/Topbar'


const text = Marvel({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marvel Cerebro',
  description: 'A website that uses Cerebro database to search for special beings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={text.className}>
        <Topbar />
        {children}</body>
    </html>
  )
}
