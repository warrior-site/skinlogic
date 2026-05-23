'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PROBLEMS } from '@/lib/problem'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  const filtered =
    query.length > 1
      ? PROBLEMS.filter(
          p =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
            p.compounds.some(c =>
              c.name.toLowerCase().includes(query.toLowerCase())
            )
        )
      : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSelect(slug: string) {
    setQuery('')
    setOpen(false)
    router.push(`/problem/${slug}`)
  }

  return (
    <div
      ref={ref}
      className="relative w-full sm:max-w-[320px]"
    >
      {/* Input */}
      <div
        className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          width:"20vw"
        }}
      >
        {/* Neon glow on focus */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300 group-focus-within:opacity-100"
          style={{
            boxShadow: '0 0 12px rgba(20,255,120,0.4)',
          }}
        />

        {/* Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: 'var(--text-light)', flexShrink: 0 }}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search skin problem..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400 outline-none"
          style={{ color: 'var(--text-dark)', outline:"none"}}
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setOpen(false)
            }}
            className="transition hover:scale-110"
            style={{ color: 'var(--text-light)' }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute left-0 right-0 top-full mt-3 rounded-2xl overflow-hidden transition-all duration-300 ${
            filtered.length > 0 || query.length > 1
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.4)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            zIndex: 100,
          }}
        >
          {/* Results */}
          {filtered.map(p => (
            <button
              key={p.slug}
              onClick={() => handleSelect(p.slug)}
              className="group flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-200"
            >
              <span className="text-lg transition group-hover:scale-110">
                {p.emoji}
              </span>

              <div className="flex flex-col">
                <span
                  className="text-sm font-medium group-hover:underline"
                  style={{ color: 'var(--text-dark)' }}
                >
                  {p.title}
                </span>
                <span
                  className="text-xs"
                  style={{ color: 'var(--text-light)' }}
                >
                  {p.shortDesc}
                </span>
              </div>
            </button>
          ))}

          {/* Empty state */}
          {query.length > 1 && filtered.length === 0 && (
            <div
              className="px-4 py-3 text-sm"
              style={{ color: 'var(--text-light)' }}
            >
              No results for “{query}”
            </div>
          )}
        </div>
      )}
    </div>
  )
}