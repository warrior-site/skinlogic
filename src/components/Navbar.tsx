"use client"

import Link from 'next/link'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'var(--cream)',
        borderColor: 'var(--border)',
        backdropFilter: 'blur(12px)',
        padding:"1vw"
      }}
    >
      <div
        className="mx-auto flex items-center gap-4 px-6 py-3"
        style={{ maxWidth: '1200px' }}
      >
        {/* Logo */}
        <Link href="/" className="font-display mr-auto shrink-0 text-lg font-semibold" style={{ color: 'var(--sage)', letterSpacing: '-0.5px' }}>
          Skin<span style={{ color: 'var(--coral)', fontStyle: 'italic',fontSize:"1.25rem" }}>Logic</span>
        </Link>

        {/* Search */}
        <SearchBar />

        {/* Nav links */}
        <div className="hidden items-center gap-5 md:flex">
          <Link href="/#problems" className="text-sm transition-colors hover:text-[var(--sage)]" style={{ color: 'var(--text-mid)' }}>
            Know Problems
          </Link>
          <Link href="/why-us" className="text-sm transition-colors hover:text-[var(--sage)]" style={{ color: 'var(--text-mid)' }}>
            Why Us
          </Link>
          <Link href="/research" className="text-sm transition-colors hover:text-[var(--sage)]" style={{ color: 'var(--text-mid)' }}>
            Research
          </Link>
        </div>
      </div>
    </nav>
  )
}