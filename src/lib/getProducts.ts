import { Product, SheetRow } from '@/types'

// ─── HOW TO SET UP GOOGLE SHEETS ───────────────────────────────────────────
// 1. Create a Google Sheet with these exact column headers in Row 1:
//    problem | productName | brand | compound | reason | price | buyLink | imageUrl
//
// 2. Fill in your products. Example row:
//    oily-skin | Niacinamide 10% + Zinc | Minimalist | Niacinamide,Zinc PCA |
//    Controls sebum production | 599 | https://youraffiliatelink.com | https://imageurl.com
//
// 3. File → Share → Publish to web → Sheet1 → CSV → Publish → Copy URL
//
// 4. Paste that URL in your .env.local as GOOGLE_SHEET_URL
// ───────────────────────────────────────────────────────────────────────────

function getPriceRange(price: string): Product['budgetRange'] {
  const num = parseInt(price.replace(/[^0-9]/g, ''), 10)
  if (num < 300) return 'under300'
  if (num <= 600) return '300to600'
  return 'above600'
}

function parseCSV(text: string): SheetRow[] {
  const lines = text.trim().split('\n')
  if (lines.length < 2) return []
  // skip header row
  return lines.slice(1).map((line) => {
    // handle commas inside quoted fields
    const cols: string[] = []
    let current = ''
    let inQuotes = false
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes; continue }
      if (ch === ',' && !inQuotes) { cols.push(current.trim()); current = ''; continue }
      current += ch
    }
    cols.push(current.trim())
    return {
      problem:     cols[0] || '',
      productName: cols[1] || '',
      brand:       cols[2] || '',
      compound:    cols[3] || '',
      reason:      cols[4] || '',
      price:       cols[5] || '0',
      buyLink:     cols[6] || '#',
      imageUrl:    cols[7] || '',
    }
  }).filter(r => r.problem && r.productName)
}

export async function getAllProducts(): Promise<Product[]> {
  const url = process.env.GOOGLE_SHEET_URL

  // ── FALLBACK DEMO DATA (used when env var is not set) ──────────────────
  if (!url) {
    console.warn('GOOGLE_SHEET_URL not set — using demo data')
    return DEMO_PRODUCTS
  }

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // re-fetch from sheet every 1 hour
    })
    if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`)
    const text = await res.text()
    const rows = parseCSV(text)
    return rows.map((r, i) => ({
      id: `product-${i}`,
      ...r,
      budgetRange: getPriceRange(r.price),
    }))
  } catch (err) {
    console.error('Failed to fetch Google Sheet, using demo data:', err)
    return DEMO_PRODUCTS
  }
}

export async function getProductsByProblem(slug: string): Promise<Product[]> {
  const all = await getAllProducts()
  return all.filter(p => p.problem === slug)
}

// ── DEMO DATA — replace with your real Google Sheet ───────────────────────
const DEMO_PRODUCTS: Product[] = [
  {
    id: '1', problem: 'oily-skin', productName: 'Niacinamide 10% + Zinc',
    brand: 'Minimalist', compound: 'Niacinamide, Zinc PCA',
    reason: 'Signals skin to produce less oil. Works within 4 weeks.',
    price: '599', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '2', problem: 'oily-skin', productName: 'Niacinamide Serum',
    brand: 'Derma Co', compound: 'Niacinamide 5%',
    reason: 'Reduces pore size and controls excess sebum naturally.',
    price: '395', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '3', problem: 'oily-skin', productName: 'Pore Clarifying Serum',
    brand: 'Dot & Key', compound: 'Salicylic Acid, Niacinamide',
    reason: 'Dual action — cleans inside pores and reduces oil production.',
    price: '599', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '4', problem: 'oily-skin', productName: 'Oil Control Mattifying Moisturizer',
    brand: 'Brillare', compound: 'Zinc, Kaolin Clay',
    reason: 'Absorbs excess oil throughout the day without drying skin.',
    price: '449', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '5', problem: 'acne', productName: 'Salicylic Acid 2% Serum',
    brand: 'Minimalist', compound: 'Salicylic Acid (BHA)',
    reason: 'Oil-soluble BHA penetrates pores and dissolves the plug causing pimples.',
    price: '349', buyLink: '#', imageUrl: '', budgetRange: 'under300',
  },
  {
    id: '6', problem: 'acne', productName: '1% Salicylic Acid Face Wash',
    brand: 'Derma Co', compound: 'Salicylic Acid',
    reason: 'Daily cleanser that prevents new breakouts from forming.',
    price: '299', buyLink: '#', imageUrl: '', budgetRange: 'under300',
  },
  {
    id: '7', problem: 'acne', productName: 'Acne Control Face Wash',
    brand: 'Brillare', compound: 'Tea Tree, Salicylic Acid',
    reason: 'Tea tree kills bacteria while salicylic acid clears pores.',
    price: '449', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '8', problem: 'acne', productName: 'Anti Acne Niacinamide Serum',
    brand: 'Dot & Key', compound: 'Niacinamide, Zinc',
    reason: 'Reduces redness and post-acne marks while preventing new ones.',
    price: '549', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '9', problem: 'pigmentation', productName: 'Alpha Arbutin 2%',
    brand: 'Minimalist', compound: 'Alpha Arbutin, Hyaluronic Acid',
    reason: 'Targets melanin production at the source. Gentler than hydroquinone.',
    price: '399', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '10', problem: 'pigmentation', productName: '10% Vitamin C Serum',
    brand: 'Derma Co', compound: 'Vitamin C, Ferulic Acid',
    reason: 'Brightens existing spots and prevents UV-induced new ones.',
    price: '565', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '11', problem: 'pigmentation', productName: 'Vitamin C + E Sunscreen SPF 50',
    brand: 'Dot & Key', compound: 'Vitamin C, Vitamin E, SPF 50',
    reason: 'Prevents further pigmentation while treating existing spots.',
    price: '595', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '12', problem: 'pigmentation', productName: 'Pigmentation Repair Serum',
    brand: 'Brillare', compound: 'Kojic Acid, Licorice',
    reason: 'Natural melanin inhibitors that fade spots without irritation.',
    price: '699', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '13', problem: 'hair-fall', productName: 'Redensyl 3% Hair Serum',
    brand: 'Minimalist', compound: 'Redensyl, Caffeine, Baicapil',
    reason: 'Clinically proven to reactivate dormant hair follicles.',
    price: '699', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '14', problem: 'hair-fall', productName: 'Hair Fall Control Oil Shots',
    brand: 'Brillare', compound: 'Redensyl, Biotin, Bhringraj',
    reason: 'Strengthens hair at follicle level and reduces breakage.',
    price: '599', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '15', problem: 'hair-fall', productName: 'Hair Growth Serum',
    brand: 'Derma Co', compound: 'Redensyl, Anagain, Procapil',
    reason: 'Triple-action formula targeting hair loss from multiple angles.',
    price: '799', buyLink: '#', imageUrl: '', budgetRange: 'above600',
  },
  {
    id: '16', problem: 'dark-circles', productName: 'Caffeine Eye Serum',
    brand: 'Minimalist', compound: 'Caffeine 3%, EGCG',
    reason: 'Constricts blood vessels under eyes, reduces puffiness visibly.',
    price: '499', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '17', problem: 'dark-circles', productName: 'Peptide Eye Cream',
    brand: 'Derma Co', compound: 'Peptides, Caffeine, Hyaluronic Acid',
    reason: 'Thickens thin under-eye skin over time, hiding blood vessels.',
    price: '649', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '18', problem: 'dark-circles', productName: 'Under Eye Brightening Cream',
    brand: 'Dot & Key', compound: 'Caffeine, Vitamin C, Hyaluronic Acid',
    reason: 'Brightens and hydrates the delicate under-eye area.',
    price: '549', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '19', problem: 'dry-skin', productName: 'Hyaluronic Acid 2%',
    brand: 'Minimalist', compound: 'Hyaluronic Acid, Sodium PCA',
    reason: 'Holds 1000x its weight in water — deep hydration for dry skin.',
    price: '399', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '20', problem: 'dry-skin', productName: 'Barrier Repair Moisturizer',
    brand: 'Dot & Key', compound: 'Ceramides, Peptides, Hyaluronic Acid',
    reason: 'Rebuilds the skin barrier that causes dryness and flakiness.',
    price: '599', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
  {
    id: '21', problem: 'dandruff', productName: 'Anti Dandruff Shampoo',
    brand: 'Brillare', compound: 'Zinc Pyrithione, Tea Tree',
    reason: 'Kills dandruff-causing fungus and soothes itchy scalp.',
    price: '349', buyLink: '#', imageUrl: '', budgetRange: 'under300',
  },
  {
    id: '22', problem: 'dandruff', productName: 'Scalp Serum',
    brand: 'Minimalist', compound: 'Salicylic Acid, Zinc',
    reason: 'Exfoliates scalp buildup and controls dandruff recurrence.',
    price: '549', buyLink: '#', imageUrl: '', budgetRange: '300to600',
  },
]