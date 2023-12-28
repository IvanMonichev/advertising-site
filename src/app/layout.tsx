import { ReactNode } from 'react'
import { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: ReactNode
}) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
)

export default RootLayout
