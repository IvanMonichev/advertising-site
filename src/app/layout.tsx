import { ReactNode } from 'react'
import { Metadata } from 'next'
import '@/assets/styles/style.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
)

export default RootLayout
