import Link from 'next/link'
import { PROBLEMS } from '@/lib/problem'
import ProductCard from '@/components/ProductCard'
import { getAllProducts } from '@/lib/getProducts'
import NavigationButtons from '@/components/NavigationButtons'

export const metadata = {
  title: "Dry & Dehydrated Skin - Research Based Guide",
  description:
    "Scientific explanation of dry vs dehydrated skin, barrier damage, water loss, and clinically proven ingredients like ceramides, glycerin, and hyaluronic acid.",
};

export default async function DrySkinPage() {
  // 1. Server-side fetch from your inventory
  const allProducts = await getAllProducts()
  
  // 2. Filter specifically for moisture barrier, dry, or dehydrated solutions
  const products = allProducts ? allProducts.filter(
    (p) => p?.problem?.toLowerCase() === 'dry-skin' || p?.problem?.toLowerCase() === 'dehydration' || p?.problem?.toLowerCase() === 'barrier'
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
        {/* Glow effect */}
        <div style={{ margin: "0.5rem" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[rgba(212,163,115,0.06)] blur-[140px] rounded-full pointer-events-none" />
        
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-8">
          Protocol 08 &middot; Stratum Corneum Integrity &amp; Lipid Synthesis
        </p>

        <h1 className="animate-fade-up font-display text-4xl sm:text-7xl font-light tracking-tight mb-10 text-[var(--text-dark)] leading-tight no-underline">
          Dry &amp; <em className="text-[var(--sage)] font-display not-italic font-normal">Dehydrated</em> Skin
        </h1>

        <p className="animate-fade-up text-neutral-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed [animation-delay:200ms] font-light">
          A critical distinction in cellular health. While dry skin presents a structural lipid deficiency (lack of oil), dehydrated skin is a systemic condition indicating a lack of bound water within the epidermis.
        </p>
      </div>

      {/* ── CLINICAL ANALYSIS CARDS ── */}
      <div className="max-w-6xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="animate-fade-up p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Pathology</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Transepidermal Water Loss (TEWL) occurs when the delicate extracellular lipid matrix is stripped. Without adequate intercellular ceramides and fatty acids, the skin barrier cracks, shedding moisture into the atmosphere and accelerating flakiness, sensitivity, and micro-inflammation.
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:100ms] p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Active Solutions</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              We apply dual-action therapeutics: multi-weight humectants to pull hydration deep into the dermis, layered with skin-identical lipids to seal the superficial layers.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Ceramides', 'Glycerin', 'Hyaluronic Acid', 'Squalane'].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-neutral-100 text-neutral-500 rounded font-bold uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:200ms] p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Structural Defense</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Reversing chronic dehydration demands more than basic moisturizers. True defense utilizes biological biomimicry—introducing ingredients that replicate your skin&apos;s natural moisturizing factors (NMF) to lock in hydration for long-term bounce and resilience.
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
                <h2 className="font-display text-3xl font-light text-[var(--text-dark)]">The Barrier Recovery Protocol</h2>
                <p className="text-neutral-500 text-sm">Curated biochemical complexes precisely balanced to reverse lipid depletion and seal moisture networks.</p>
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

      {/* ── CLINICAL INGREDIENTS BREAKDOWN ── */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl font-light text-[var(--text-dark)] mb-4">Evidence-Based Ingredient Matrix</h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-sm">Every molecule is chosen for its specific mechanical function within the stratum corneum layers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Ceramides
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Acts as the cellular &quot;mortar&quot; inside the skin barrier. Replenishing pure ceramides directly restores the skin matrix, fundamentally lowering transepidermal water loss and preventing external irritants from penetrating.
            </p>
          </div>

          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Hyaluronic Acid
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A powerful molecular sponge that holds massive hydration quantities deep within cellular pathways. By utilizing cross-linked molecular weights, it plumps superficial skin tissue and targets fine lines from dehydration instantly.
            </p>
          </div>

          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Glycerin
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A gold-standard endogenous humectant. It penetrates deep past the skin envelope, matching natural moisture channels to pull water content upward and maintain a stable, supple cellular environment during temperature fluctuations.
            </p>
          </div>

          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Squalane
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A highly stable, biocompatible lipid that mirrors the skin&apos;s natural protective sebum. Squalane delivers weightless emollience, restructuring rough texture and forming an invisible, non-comedogenic shield to trap locked moisture.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESEARCH CITATIONS ── */}
      <section className="py-20 max-w-3xl mx-auto px-6 border-t border-neutral-200/40">
        <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-8 text-center">Clinical Evidence &amp; Literature</h4>
        <ul className="space-y-4 text-xs text-neutral-500 font-mono tracking-tight max-w-2xl mx-auto">
          <li className="flex items-start gap-4">
            <span className="text-[var(--sage)] font-bold">[01]</span>
            <span>National Institutes of Health (NIH): Analysis on Stratum Corneum Barrier Function, Lipid Depletion Mechanics, and TEWL Dynamics.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-[var(--sage)] font-bold">[02]</span>
            <span>Journal of Dermatological Science: Evaluation of Intercellular Ceramide Ratio Variations in Severely Xerotic Skin States.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-[var(--sage)] font-bold">[03]</span>
            <span>Clinical &amp; Aesthetic Dermatology: Multi-Weight Hyaluronic Acid Matrix Systems for Deep Epicutaneous Water Retention.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-[var(--sage)] font-bold">[04]</span>
            <span>International Journal of Cosmetic Science: Glycerin Intercellular Humectant Pathway Optimization and Barrier Repair Kinetics.</span>
          </li>
        </ul>
      </section>

      {/* ── EXPLORE OTHER PROBLEMS LINK GRID ── */}
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
                  {/* Decorative underline animation */}
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