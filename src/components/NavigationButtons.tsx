'use client'

import { useRouter } from 'next/navigation'

export default function NavigationButtons() {
  const router = useRouter()

  return (
    <>
      {/* 🔙 BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8" style={{padding:"0.5rem"}}>
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background: 'rgba(20, 255, 120, 0.08)', // soft green tint
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(20,255,120,0.3)',
                  boxShadow: `
    0 0 10px rgba(20,255,120,0.4),
    0 0 20px rgba(20,255,120,0.25),
    0 0 40px rgba(20,255,120,0.15),
  `
                  , padding: "0.5rem"
                }}
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> Back to Hub
        </button>
      </div>

      {/* 🧭 STICKY SIDE NAV (desktop only) */}
      <div className="hidden xl:block fixed left-12 top-1/3 text-xs font-medium tracking-wider uppercase text-neutral-400 space-y-4 border-l border-neutral-200 pl-4 z-50">
        <ul className="space-y-3.5">
          <li className="hover:text-[var(--sage)] transition-colors cursor-pointer">Overview</li>
          <li className="hover:text-[var(--sage)] transition-colors cursor-pointer">Root Causes</li>
          <li className="hover:text-[var(--sage)] transition-colors cursor-pointer">Mechanism</li>
          <li className="hover:text-[var(--sage)] transition-colors cursor-pointer">Recommended Routine</li>
        </ul>
      </div>
    </>
  )
}