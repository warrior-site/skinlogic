import { Product } from '@/types'

const BRAND_COLORS: Record<string, string> = {
  'Minimalist':  'var(--sage)',
  'Derma Co':    'var(--coral)',
  'Dot & Key':   '#7a5ea0',
  'Brillare':    'var(--gold)',
}

const BRAND_BG: Record<string, string> = {
  'Minimalist':  'var(--sage-light)',
  'Derma Co':    'var(--coral-light)',
  'Dot & Key':   '#f3eef8',
  'Brillare':    'var(--gold-light)',
}

interface Props {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: Props) {
  const brandColor = BRAND_COLORS[product.brand] || 'var(--sage)'
  const brandBg    = BRAND_BG[product.brand]    || 'var(--sage-light)'

  return (
    <div
      className={`animate-fade-up-${Math.min(index + 1, 6)} flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1`}
      style={{
        background: 'white',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: 'var(--shadow-sm)',
        padding:"5px"
      }}
    >
      {/* Image area */}
      <div
        className="flex items-center justify-center"
        style={{ height: '100px', background: brandBg }}
      >
        {product.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="h-full w-full object-contain p-3"
          />
        ) : (
          <div className="text-4xl opacity-40">🧴</div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3">
        {/* Brand badge */}
        <span
          className="mb-1.5 self-start rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
          style={{ background: brandBg, color: brandColor }}
        >
          {product.brand}
        </span>

        <div className="mb-1 text-sm font-medium leading-tight" style={{ color: 'var(--text-dark)' }}>
          {product.productName}
        </div>

        <div className="mb-2 text-xs" style={{ color: 'var(--text-light)' }}>
          {product.compound}
        </div>

        {/* Reason — the science */}
        <div
          className="mb-3 flex-1 rounded-lg px-2.5 py-2 text-xs leading-relaxed"
          style={{ background: 'var(--sage-light)', color: 'var(--sage-dark)' }}
        >
          {product.reason}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'var(--text-dark)' }}>
            ₹{product.price}
          </span>
          <a
            href={product.buyLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full  px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--sage)',padding:"5px",color:"grey",textDecoration:"none" }}
          >
            Buy Now →
          </a>
        </div>
      </div>
    </div>
  )
}