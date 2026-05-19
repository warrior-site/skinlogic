import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'Fraunces', 'serif'],
        sans:    ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      colors: {
        sage:   '#3d6b4f',
        coral:  '#c4614a',
        gold:   '#b8955a',
        cream:  '#faf7f2',
      },
    },
  },
  plugins: [],
}

export default config