import Link from 'next/link'
import { PROBLEMS } from '@/lib/problem'
import ProductCard from '@/components/ProductCard'
import { getAllProducts } from '@/lib/getProducts'
import NavigationButtons from '@/components/NavigationButtons'

export const metadata = {
  title: "Dandruff & Itchy Scalp - Research Based Guide",
  description:
    "Scientific explanation of dandruff, scalp irritation, and clinically proven ingredients like ketoconazole, zinc, and salicylic acid.",
};

export default async function DandruffPage() {
  // 1. Server-side fetch
  const allProducts = await getAllProducts()
  
  // 2. Direct filter for Dandruff / Scalp concerns
  const products = allProducts ? allProducts.filter(
    (p) => p?.problem?.toLowerCase() === 'dandruff' || p?.problem?.toLowerCase() === 'scalp'
  ) : []

  return (
    <div
      className="min-h-screen selection:bg-[var(--sage-light)] selection:text-[var(--sage)] pb-24"
      style={{
        background: 'linear-gradient(180deg, var(--cream) 0%, #ffffff 40%, #ffffff 85%, var(--cream) 100%)',
        fontFamily: "'Inter', sans-serif",
        padding: "0.5rem"
      }}
    >
      <NavigationButtons />

      {/* ── HERO SECTION ── */}
      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 sm:pt-48 sm:pb-40 text-center" style={{ padding: "0.5rem" }}>
        {/* Subtle green aesthetic ambient glow */}
        <div style={{ margin: "0.5rem" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[rgba(20,255,120,0.06)] blur-[140px] rounded-full pointer-events-none" />
        
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-8">
          Protocol 06 &middot; Malassezia Restriction &amp; Keratolytic Control
        </p>

        <h1 className="animate-fade-up font-display text-4xl sm:text-7xl font-light tracking-tight mb-10 text-[var(--text-dark)] leading-tight no-underline">
          Dandruff &amp; <em className="text-[var(--sage)] font-display not-italic font-normal">Itchy Scalp</em>
        </h1>

        <p className="animate-fade-up text-neutral-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed [animation-delay:200ms] font-light">
          A clinical approach to desquamation management. By targeting fungal lipases, free fatty acid irritation, and accelerated desquamation cycles, we normalize cell renewal without resetting your skin barrier health.
        </p>
      </div>

      {/* ── CLINICAL ANALYSIS CARDS ── */}
      <div className="max-w-6xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="animate-fade-up p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Pathology</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Dandruff originates within the oily follicular niche. Lipophilic Malassezia yeasts metabolize triglycerides into oleic acid, disrupting the stratum corneum barrier and causing visible clustering of corneocytes.
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:100ms] p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Active Solutions</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Our protocol leverages targeted fungistatic components alongside deep structural cell softeners to break down flaking instantly.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Ketoconazole', 'Zinc Pyrithione', 'Salicylic Acid', 'Tea Tree'].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-neutral-100 text-neutral-500 rounded font-bold uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:200ms] p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Barrier Protection</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Dandruff is mistakenly managed as general dry skin. Stripping surfactant treatments trigger inflammatory responses, lowering the critical lipid barrier threshold and worsening overall flake severity.
            </p>
          </div>

        </div>
      </div>

      {/* ── HORIZONTAL PRODUCT ROW ── */}
      {products.length > 0 && (
        <section className="py-32 relative border-y border-neutral-200/40" style={{ background: 'var(--cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <h2 className="font-display text-3xl font-light text-[var(--text-dark)]">The Scalp Equilibrium Protocol</h2>
                <p className="text-neutral-500 text-sm">Curated formulations optimized for direct antimicotic activity and follicle clarification.</p>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                Slide to explore all formulations &rarr;
              </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-8 overflow-x-auto pb-12 pt-4 px-2 no-underline scrollbar-hide snap-x snap-mandatory touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {products.map((product, idx) => (
                <div
                  key={product._id || product.id || idx}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start transition-transform duration-500 hover:-translate-y-4"
                >
                  <ProductCard product={product} index={idx} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EDUCATIONAL BLOCK ── */}
      <section className="py-32 max-w-3xl mx-auto px-6 text-center">
        <h3 className="font-display text-3xl font-light mb-8 text-[var(--text-dark)]">Biology Over Branding</h3>
        <p className="text-neutral-500 text-lg leading-relaxed font-light mb-8">
          Scalp care is skin care. Rather than chemically masking visible shedding with harsh stripping alcohols, authentic restoration targets microbial proliferation directly. Halting the destructive breakdown of lipids stops inflammatory signals, bringing the epidermal transit window safely back to its resting 28-day loop.
        </p>
        <div className="w-12 h-px bg-[var(--sage)] mx-auto opacity-50" />
      </section>

      {/* ── REDESIGNED NAVIGATION BUTTONS ── */}
      {PROBLEMS && PROBLEMS.length > 0 && (
        <section className="py-32 border-t border-neutral-200/40 bg-white" style={{ width: "100%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl font-light mb-16 text-[var(--text-dark)] tracking-wide">
              Explore Other Skin Concerns
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROBLEMS.map((p) => (
                <Link
                  key={p.slug || p.title}
                  href={`/${p.slug}`}
                  className="group relative rounded-3xl p-10 bg-white border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-[rgba(20,255,120,0.4)] hover:shadow-[0_20px_50px_rgba(20,255,120,0.1)] hover:-translate-y-2 block no-underline"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">{p.emoji || '✨'}</div>
                  <div className="text-sm font-bold tracking-widest uppercase text-neutral-800 no-underline" style={{ textDecoration: 'none' }}>
                    {p.title || 'Untitled'}
                  </div>
                  <div className="mt-4 text-[10px] text-neutral-400 font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    View Formulations &rarr;
                  </div>
                  {/* Underline */}
                  <div className="mx-auto mt-6 h-[2px] w-0 bg-[var(--sage)] transition-all duration-500 group-hover:w-1/3"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}