/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stefto official brand colors from Git repository
        stefto: {
          blue: '#1c469d',
          dark: '#142b54',
          red: '#dd2424',
        },
        'stefto-navy': '#142b54',
        'stefto-indigo': '#193260',
        'stefto-blue': '#1c469d',
        'stefto-sky': '#1e3b6f',
        'stefto-primary': '#1158a7', // Added for global use

        // Whatspify colors mapped to HSL custom properties
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // Swiss Style Colors
        'swiss-canvas': '#f0f0e8',
        'swiss-ink': '#000000',
        'swiss-blue': '#1d4ed8',
        'swiss-red': '#dc2626',
        'swiss-green': '#15803d',
        'swiss-orange': '#f97316',
        'swiss-panel': '#e5e5e0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        geist: ['"Geist"', 'Inter', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'sw-xs': '1px 1px 0px 0px #000000',
        'sw-sm': '2px 2px 0px 0px #000000',
        'sw-default': '4px 4px 0px 0px #000000',
        'sw-card': '6px 6px 0px 0px #000000',
        'sw-lg': '8px 8px 0px 0px #000000',
        'sw-xl': '12px 12px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}