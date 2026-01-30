import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curate Your Life — Growth Journey',
  description:
    'Mindset-first, opportunity-driven — a practical path to financial growth beyond salary.',
  metadataBase: new URL('https://example.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
