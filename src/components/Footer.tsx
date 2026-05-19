import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text-dark)' }}>
      <div className="mx-auto px-6 py-10" style={{ maxWidth: '1200px' }}>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-display mb-3 text-xl font-normal" style={{ color: 'white' }}>
              Skin<span style={{ color: 'var(--sage-mid)', fontStyle: 'italic' }}>Logic</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Science-based skincare guidance for everyday people. We read the research so you don&apos;t have to.
            </p>
            <p className="mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              All recommendations are affiliate links. We earn a small commission at no extra cost to you.
            </p>
          </div>

          {/* Problems */}
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Skin Problems
            </div>
            <div className="flex flex-col gap-2">
              {['oily-skin', 'acne', 'pigmentation', 'hair-fall', 'dark-circles', 'dry-skin'].map(slug => (
                <Link key={slug} href={`/problem/${slug}`} className="text-sm capitalize transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {slug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Connect
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Instagram
              </a>
              <a href="https://quora.com" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Quora
              </a>
              <Link href="/research" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Our Research
              </Link>
              <Link href="/why-us" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Why Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2025 SkinLogic · Not a substitute for medical advice · Always patch test new products
          </p>
        </div>
      </div>
    </footer>
  )
}