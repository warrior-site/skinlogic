export interface Product {
  id: string
  problem: string
  productName: string
  brand: string
  compound: string
  reason: string
  price: string
  buyLink: string
  imageUrl: string
  budgetRange: 'under300' | '300to600' | 'above600'
}

export interface Problem {
  slug: string
  title: string
  emoji: string
  shortDesc: string
  fullDesc: string
  cause: string
  compounds: { name: string; reason: string }[]
  badge: string
  badgeColor: 'coral' | 'sage' | 'gold'
}

export interface SheetRow {
  problem: string
  productName: string
  brand: string
  compound: string
  reason: string
  price: string
  buyLink: string
  imageUrl: string
}