import { ReactNode } from 'react'

export function Card({
  title,
  children,
  icon,
}: {
  title: string
  children: ReactNode
  icon?: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-1 h-9 w-9 shrink-0 rounded-xl border border-zinc-800 bg-zinc-950/60 grid place-items-center text-zinc-100">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-2 text-zinc-200/85 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
