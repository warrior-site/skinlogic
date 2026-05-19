'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PROBLEMS } from '@/lib/problem'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  const filtered = query.length > 1
    ? PROBLEMS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
        p.compounds.some(c => c.name.toLowerCase().includes(query.toLowerCase()))
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
    <div ref={ref} className="relative flex-1" style={{ maxWidth: '280px' }}>
      <div
        className="flex items-center gap-2 rounded-full px-3 py-2"
        style={{
          background: 'white',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-light)', flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder="Search skin problem..."
          className="w-full bg-transparent text-sm outline-none"
          style={{ color: 'var(--text-dark)', fontFamily: 'inherit' }}
        />
        {query && (
          <button onClick={() => { setQuery(''); setOpen(false) }} style={{ color: 'var(--text-light)', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && filtered.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full mt-2 rounded-xl overflow-hidden"
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 100,
          }}
        >
          {filtered.map(p => (
            <button
              key={p.slug}
              onClick={() => handleSelect(p.slug)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--sage-light)]"
            >
              <span className="text-lg">{p.emoji}</span>
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-dark)' }}>{p.title}</div>
                <div className="text-xs" style={{ color: 'var(--text-light)' }}>{p.shortDesc}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {open && query.length > 1 && filtered.length === 0 && (
        <div
          className="absolute left-0 right-0 top-full mt-2 rounded-xl px-4 py-3 text-sm"
          style={{ background: 'white', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)', color: 'var(--text-light)', zIndex: 100 }}
        >
          No problems found for &quot;{query}&quot;
        </div>
      )}
    </div>
  )
}