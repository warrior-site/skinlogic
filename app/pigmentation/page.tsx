import Link from 'next/link'
import { PROBLEMS } from '@/lib/problem'
import ProductCard from '@/components/ProductCard'
import { getAllProducts } from '@/lib/getProducts'
import NavigationButtons from '@/components/NavigationButtons'

export const metadata = {
  title: "Pigmentation & Dark Spots - Research Based Guide",
  description:
    "Understand hyperpigmentation, melanin production, and evidence-based ingredients that reduce dark spots.",
};

export default async function PigmentationPage() {
  // 1. Server-side fetch from inventory data
  const allProducts = await getAllProducts()
  
  // 2. Filter dynamically for tyrosinase-inhibiting or brightening protocols
  const products = allProducts ? allProducts.filter(
    (p) => p?.problem?.toLowerCase() === 'pigmentation' || p?.problem?.toLowerCase() === 'dark spots' || p?.problem?.toLowerCase() === 'brightening'
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
        <div style={{ margin: "0.5rem" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[rgba(212,190,115,0.06)] blur-[140px] rounded-full pointer-events-none" />
        
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-8">
          Protocol 03 &middot; Melanogenesis Regulation &amp; Tyrosinase Inhibition
        </p>

        <h1 className="animate-fade-up font-display text-4xl sm:text-7xl font-light tracking-tight mb-10 text-[var(--text-dark)] leading-tight no-underline">
          Pigmentation &amp; <em className="text-[var(--sage)] font-display not-italic font-normal">Dark Spots</em>
        </h1>

        <p className="animate-fade-up text-neutral-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed [animation-delay:200ms] font-light">
          A biochemical breakdown of epidermal discoloration. Hyperpigmentation is driven by hyperactive melanocytes responding to inflammatory cascades, UV radiation, and hormonal triggers—depositing localized pigment clusters across the skin matrix.
        </p>
      </div>

      {/* ── CLINICAL ANALYSIS CARDS ── */}
      <div className="max-w-6xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="animate-fade-up p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Pathology</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              When UV radiation or post-inflammatory events strike the skin, a cellular defense mechanisms triggers the copper-dependent enzyme tyrosinase. This converts amino acids into unstable tyrosine derivatives, initiating a rapid synthesis pathway that forms raw melanin pigment.
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:100ms] p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Active Solutions</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Our intervention strategies systematically shut down pigment production down by blocking enzymatic conversion, intercepting cellular transfer networks, and fading visible dark patches.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Vitamin C', 'Niacinamide', 'Alpha Arbutin', 'Kojic Acid'].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-neutral-100 text-neutral-500 rounded font-bold uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:200ms] p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-neutral-200/50 transition-all duration-500 hover:border-[rgba(20,255,120,0.3)]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--sage)] mb-6">Structural Defense</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              True correction requires multi-pathway synchronization. Rather than simply exfoliating the surface skin layer, long-term tone correction depends on combining active cellular blockades to prevent pigment synthesis at its biological origin points.
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
                <h2 className="font-display text-3xl font-light text-[var(--text-dark)]">The Tone Correction Protocol</h2>
                <p className="text-neutral-500 text-sm">Advanced targeted formulations designed to suppress localized melanin transfer and uniform skin clarity.</p>
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
          <p className="text-neutral-500 max-w-xl mx-auto text-sm">Validated agents curated for their mechanical suppression of cellular pathways and pigment accumulation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Vitamin C
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A highly potent biological antioxidant. It reduces hyperpigmentation by donating electrons to inhibit tyrosinase enzyme activity, successfully intercepting excessive melanin formation while neutralizing environmental free-radical cascades.
            </p>
          </div>

          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Niacinamide
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              An indispensable cell-signaling component. Instead of targeting tyrosinase directly, it blocks the physical transfer of generated pigment granules (melanosomes) from deep melanocytes up into the surrounding epidermal surface cells.
            </p>
          </div>

          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Alpha Arbutin
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A functional hydroquinone derivative optimized for safety and stability. It delivers sustained release to downregulate the skin&apos;s internal melanin production engine, minimizing spots caused by sun damage and post-inflammatory events.
            </p>
          </div>

          <div className="p-8 border-b border-neutral-100">
            <h4 className="font-medium text-lg text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" /> Kojic Acid
            </h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A naturally derived copper-chelating molecule. By binding directly to the active metallic sites within the tyrosinase enzyme matrix, it systematically breaks down pigment generation pathways to uncover real skin brightness.
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
            <span>National Institutes of Health (NIH): Biological Mechanisms Governing Skin Pigmentation and Melanocyte Regulation.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-[var(--sage)] font-bold">[02]</span>
            <span>PubMed Central: Structural Roles of the Tyrosinase Enzyme and Substrate Kinetics in Hyperpigmentation States.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-[var(--sage)] font-bold">[03]</span>
            <span>National Institutes of Health (NIH): Topical L-Ascorbic Acid and Functional Analogues within Modern Dermatological Clinical Settings.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-[var(--sage)] font-bold">[04]</span>
            <span>Journal of Cosmetic Dermatology: Assessment of Niacinamide Pathways on the Suppression of Melanosome Keratinocyte Co-Cultures.</span>
          </li>
        </ul>
      </section>

      {/* ── EXPLORE OTHER PROBLEMS LINK GRID ── */}
      {PROBLEMS && PROBLEMS.length > 0 && (
        <section className="py-32 border-t border-neutral-200/40 bg-white" style={{ width: "100%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl font-light mb-16 text-[var(--text-dark)] tracking-wide">
              Explore Other Skin &amp; Hair Concerns
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