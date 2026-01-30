import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: 'Curate Your Life — Growth Journey',
  description:
    'Mindset-first, opportunity-driven — a practical path to financial growth beyond salary.',
  metadataBase: new URL('https://curateyourlife.in'),
  icons: {
    icon: "/curateyourlife_favicon.ico",
    apple: "/curateyourlife_favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<WhatsAppFloat /></body>
    </html>
  )
}
