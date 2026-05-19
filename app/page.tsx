import Link from 'next/link'
import { getAllProducts } from '@/lib/getProducts'
import { PROBLEMS } from '@/lib/problem'
import ProductCard from '@/components/ProductCard'

const BADGE_STYLE: Record<string, { bg: string; color: string }> = {
  coral: { bg: 'var(--coral-light)', color: 'var(--coral)' },
  sage:  { bg: 'var(--sage-light)',  color: 'var(--sage)'  },
  gold:  { bg: 'var(--gold-light)',  color: 'var(--gold)'  },
}

const SOCIAL_LINKS = [
  {
    href:  'https://instagram.com',
    label: 'Instagram',
    sub:   'Daily skincare tips',
    icon:  '📸',
    bg:    'rgba(196,97,74,0.15)',
    color: '#e8826a',
  },
  {
    href:  'https://quora.com',
    label: 'Quora',
    sub:   'Answering your questions',
    icon:  '💬',
    bg:    'rgba(192,57,43,0.15)',
    color: '#e07060',
  },
  {
    href:  'https://pinterest.com',
    label: 'Pinterest',
    sub:   'Visual skincare guides',
    icon:  '📌',
    bg:    'rgba(230,0,35,0.15)',
    color: '#ff6680',
  },
  {
    href:  'https://t.me',
    label: 'Telegram',
    sub:   'Join our skin community',
    icon:  '✈️',
    bg:    'rgba(0,136,204,0.15)',
    color: '#5bb8f5',
  },
]

export default async function HomePage() {
  const allProducts = await getAllProducts()

  return (
    <>

      {/* ── Hero ───────────────────────────────────────── */}
      <section
        className="px-8 pb-32 pt-28 text-center"
        style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--sage-light) 100%)',marginTop:"2vh" }}
      >
        <div className="mx-auto" style={{ maxWidth: '700px' }}>

          <div
            className="animate-fade-up-1 mb-10 inline-block rounded-full border md:m-5 px-7 py-3 text-sm font-medium uppercase tracking-widest"
            style={{
              background: 'var(--sage-light)',
              borderColor: 'rgba(61,107,79,0.25)',
              color: 'var(--sage)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
              padding:"5px",
              marginTop:"1vh"
            }}
          >
            Science-backed · Not sponsored opinions
          </div>

          <h1
            className="font-display animate-fade-up-2 mb-8 text-5xl font-light leading-tight"
            style={{ color: 'var(--text-dark)', letterSpacing: '-1px',marginTop:"2vh",lineHeight:"1.2" }}
          >
            Simple solutions for<br />
            <em style={{ color: 'var(--sage)', fontStyle: 'italic',marginTop:"2vh" }}>real skin problems</em>
          </h1>

          <p
            className="animate-fade-up-3 mb-16 text-base leading-relaxed"
            style={{ color: 'var(--text-mid)',marginTop:"2vh",lineHeight:"1.2" }}
          >
            We read the science so you don&apos;t have to.<br />
            Every product recommended by{' '}
            <strong style={{ color: 'var(--sage)',marginTop:"2vh",lineHeight:"1.2" }}>ingredient</strong>, not by brand deal.
          </p>

          <div className="animate-fade-up-4 flex flex-wrap justify-center gap-4 mt-6 ">
            {PROBLEMS.map(p => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background:  'white',
                  borderColor: 'rgba(0,0,0,0.1)',
                  color:       'var(--text-dark)',
                  boxShadow:   'var(--shadow-sm)',
                  padding:"5px"
                }}
              >
                <span className="text-base">{p.emoji}</span>
                {p.title.split('&')[0].trim()}
              </a>
            ))}
          </div>

        </div>
      </section>


      {/* ── Trust bar ───────────────────────────────────── */}
      <section
        className="border-y px-6 py-8"
        style={{ borderColor: 'var(--border)', background: 'white' }}
      >
        <div
          className="mx-auto flex flex-wrap items-center justify-center gap-12"
          style={{ maxWidth: '1200px' }}
        >
          {[
            { icon: '🔬', text: 'Ingredient-first approach' },
            { icon: '💸', text: 'No brand sponsorships' },
            { icon: '🇮🇳', text: 'Made for Indian skin' },
            { icon: '📋', text: 'Research-backed recommendations' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-mid)' }}>
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ── Problems + Products ─────────────────────────── */}
      <section className="px-8 py-28" id="problems">
        <div className="mx-auto" style={{ maxWidth: '1150px' }}>

          <div className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--sage)', marginTop: '3vh' }}>
            Browse by problem
          </div>

          <h2 className="font-display mb-20 text-4xl font-light" style={{ color: 'var(--text-dark)' }}>
            What&apos;s bothering your skin?
          </h2>

          <div className="flex flex-col gap-[10vh] mt-[3vh]">
            {PROBLEMS.map((problem, i) => {
              const products = allProducts.filter(p => p.problem === problem.slug).slice(0, 4)
              const badge = BADGE_STYLE[problem.badgeColor]

              return (
                <div
                  key={problem.slug}
                  id={problem.slug}
                  className={`animate-fade-up-${Math.min(i + 1, 6)} rounded-2xl overflow-hidden`}
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.07)',
                    boxShadow: 'var(--shadow-sm)',
                    padding:"10px",
                  }}
                >

                  {/* Header */}
                  <div className="px-10 py-9" style={{ borderBottom: products.length > 0 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <div className="flex items-center justify-between flex-wrap gap-6">

                      <div className="flex items-center gap-6">
                        <div
                          className="flex items-center justify-center rounded-2xl"
                          style={{
                            width: '72px',
                            height: '72px',
                            background: badge.bg,
                            fontSize: '30px',
                          }}
                        >
                          {problem.emoji}
                        </div>

                        <div className='p-[5vw]'>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-display text-xl font-light">{problem.title}</h3>
                            <span className="rounded-full px-3 py-1 ml-[1vw] text-xs font-medium" style={{ background: badge.bg, color: badge.color }}>
                              {problem.badge}
                            </span>
                          </div>

                          <p className="text-sm mb-4" style={{ color: 'var(--text-mid)' }}>
                            {problem.shortDesc}
                          </p>

                          <div className="flex flex-wrap gap-2  ">
                            {problem.compounds.slice(0, 3).map(c => (
                              <span key={c.name} className="rounded-full ml-[1vw] p-[1vw] px-3 py-1 text-xs font-medium" style={{ background: 'var(--sage-light)', color: 'var(--sage)' }}>
                                {c.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/${problem.slug}`}
                        className="relative no-underline rounded-full border px-6 py-2.5 text-sm font-medium transition-all hover:bg-(--sage) hover:text-white hover:border-(--sage) hover:shadow-md after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-linear-to-r after:from-(--sage) after:to-(--coral) after:transition-all hover:after:w-full"
                        style={{ borderColor: 'var(--border)', color: 'var(--text-mid)', padding:"5px" }}
                      >
                        View all →
                      </Link>

                    </div>
                  </div>

                  {/* Products */}
                  {products.length > 0 && (
                    <div className="px-10 py-9" style={{ background: 'var(--cream)',padding:"10px" }}>
                      <div
                        className="grid"
                        style={{
                          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                          gap: '24px',
                        }}
                      >
                        {products.map((product, idx) => (
                          <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* ── Social ───────────────────────────────────── */}
      <section className="px-6 py-24" style={{ background: 'var(--text-dark)',color:"grey" }}>
        <div className="mx-auto" style={{ maxWidth: '900px' }}>

          <h2 className="text-white text-center text-3xl mb-14">Follow for daily tips</h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" group flex flex-col items-center gap-5 rounded-2xl py-12 px-7 text-center transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding:"5px"
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full text-2xl group-hover:scale-110"
                  style={{ width: '60px', height: '60px', background: s.bg }}
                >
                  {s.icon}
                </div>

                <div>
                  <div className="text-sm font-medium text-white">{s.label}</div>
                  <div className="text-xs text-gray-400">{s.sub}</div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

    </>
  )
} 