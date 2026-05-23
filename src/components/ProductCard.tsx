import { Product } from '@/types'

const BRAND_COLORS: Record<string, string> = {
  Minimalist: 'var(--sage)',
  'Derma Co': 'var(--coral)',
  'Dot & Key': '#7a5ea0',
  Brillare: 'var(--gold)',
}

const BRAND_BG: Record<string, string> = { 
  Minimalist: 'rgba(61,107,79,0.12)',
  'Derma Co': 'rgba(196,97,74,0.12)',
  'Dot & Key': 'rgba(122,94,160,0.12)',
  Brillare: 'rgba(212,175,55,0.12)',
}

interface Props {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: Props) {
  const brandColor = BRAND_COLORS[product.brand] || 'var(--sage)'
  const brandBg = BRAND_BG[product.brand] || 'rgba(61,107,79,0.12)'

  return (
    <div
      className={`animate-fade-up-${Math.min(
        index + 1,
        6
      )} group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300`}
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        padding: '12px',
      }}
    >
      {/* Glow hover effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))',
        }}
      />

      {/* Image */}
      <div
        className="flex items-center justify-center rounded-xl mb-3 transition-transform duration-300 group-hover:scale-105"
        style={{
          height: '110px',
          background: brandBg,
        }}
      >
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="h-full w-full object-contain p-3"
          />
        ) : (
          <div className="text-4xl opacity-40">🧴</div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-1">
        {/* Brand */}
        <span
          className="mb-2 self-start rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide"
          style={{ background: brandBg, color: brandColor }}
        >
          {product.brand}
        </span>

        {/* Name */}
        <h3
          className="mb-1 text-sm font-semibold leading-snug line-clamp-2"
          style={{ color: 'var(--text-dark)' }}
        >
          {product.productName}
        </h3>

        {/* Compound */}
        <p className="mb-2 text-xs" style={{ color: 'var(--text-light)' }}>
          {product.compound}
        </p>

        {/* Reason */}
        <div
          className="mb-3 flex-1 rounded-lg px-3 py-2 text-xs leading-relaxed"
          style={{
            background: 'rgba(61,107,79,0.08)',
            color: 'var(--sage-dark)',
          }}
        >
          {product.reason}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-auto">
          <span
            className="text-sm font-semibold"
            style={{ color: 'var(--text-dark)' }}
          >
            ₹{product.price}
          </span>

          {/* CTA with underline animation */}
          <a
            href={product.buyLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="relative text-xs font-medium"
            style={{ color: 'var(--sage)', textDecoration: 'none' }}
          >
            Buy Now →
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
              style={{
                background:
                  'linear-gradient(to right, var(--sage), var(--coral))',
              }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}