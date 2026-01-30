import Link from 'next/link'

export function CTAButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-base font-semibold text-zinc-950 shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
    >
      {children}
    </Link>
  )
}
