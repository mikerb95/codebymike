import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#dcebff',
          200: '#b9d7ff',
          300: '#8dbdff',
          400: '#5f9cff',
          500: '#387bff',
          600: '#225cf2',
          700: '#1a46c1',
          800: '#183c98',
          900: '#183678'
        }
      }
    }
  },
  plugins: []
} satisfies Config
