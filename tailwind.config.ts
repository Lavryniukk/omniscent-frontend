import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '10xl': '1600px',
      },
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'text': 'var(--text)',
        'background': 'var(--background)'
        
      },
      fontFamily: {
        'roboto': 'var(--roboto-font)'
      }
    },
  },
  plugins: [],
}
export default config
