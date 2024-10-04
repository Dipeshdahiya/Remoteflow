import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Providers } from "./providers";
import './globals.css'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Connected Workspace',
  description: 'Bird - Simple and powerful notes & docs for teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth focus:scroll-auto">
      <body className={font.className}>
        <Providers>{children}</Providers>
        </body>
    </html>
  )
}
