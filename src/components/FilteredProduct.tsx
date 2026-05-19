'use client'

import { useState } from 'react'
import { Product } from '@/types'
import ProductCard from './ProductCard'

const BRANDS = ['All', 'Minimalist', 'Derma Co', 'Dot & Key', 'Brillare']
const BUDGETS = [
  { label: 'All Budgets', value: 'all' },
  { label: 'Under ₹300', value: 'under300' },
  { label: '₹300–₹600', value: '300to600' },
  { label: 'Above ₹600', value: 'above600' },
]

interface Props {
  products: Product[]
}

export default function FilteredProducts({ products }: Props) {
  const [brand, setBrand]   = useState('All')
  const [budget, setBudget] = useState('all')
  const [sort, setSort]     = useState<'default' | 'priceLow' | 'priceHigh'>('default')

  const filtered = products
    .filter(p => brand === 'All' || p.brand === brand)
    .filter(p => budget === 'all' || p.budgetRange === budget)
    .sort((a, b) => {
      if (sort === 'priceLow')  return parseInt(a.price) - parseInt(b.price)
      if (sort === 'priceHigh') return parseInt(b.price) - parseInt(a.price)
      return 0
    })

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {/* Brand filter */}
        <div className="flex flex-wrap gap-2">
          {BRANDS.map(b => (
            <button
              key={b}
              onClick={() => setBrand(b)}
              className="rounded-full border px-3 py-1.5 text-xs font-medium transition-all"
              style={{
                background:   brand === b ? 'var(--sage)' : 'white',
                color:        brand === b ? 'white' : 'var(--text-mid)',
                borderColor:  brand === b ? 'var(--sage)' : 'var(--border)',
              }}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="h-5 w-px hidden md:block" style={{ background: 'var(--border)' }} />

        {/* Budget filter */}
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map(b => (
            <button
              key={b.value}
              onClick={() => setBudget(b.value)}
              className="rounded-full border px-3 py-1.5 text-xs font-medium transition-all"
              style={{
                background:  budget === b.value ? 'var(--gold)' : 'white',
                color:       budget === b.value ? 'white' : 'var(--text-mid)',
                borderColor: budget === b.value ? 'var(--gold)' : 'var(--border)',
              }}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={e => setSort(e.target.value as typeof sort)}
          className="ml-auto rounded-full border px-3 py-1.5 text-xs outline-none"
          style={{
            background: 'white',
            borderColor: 'var(--border)',
            color: 'var(--text-mid)',
            fontFamily: 'inherit',
          }}
        >
          <option value="default">Sort: Default</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm" style={{ color: 'var(--text-light)' }}>
        {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
      </div>

      {/* Products grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center" style={{ color: 'var(--text-light)' }}>
          <div className="mb-2 text-3xl">🔍</div>
          <div className="text-sm">No products match these filters.</div>
          <button
            onClick={() => { setBrand('All'); setBudget('all'); setSort('default') }}
            className="mt-3 text-sm underline"
            style={{ color: 'var(--sage)' }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}