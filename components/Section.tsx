import { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="py-14 sm:py-20">
      {eyebrow ? (
        <p className="text-xs sm:text-sm tracking-widest uppercase text-zinc-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-4xl font-semibold leading-tight">
        {title}
      </h2>
      <div className="mt-6 text-zinc-200/90 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
