/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050b14', // Base body
          900: '#0a1324', // Surface
          850: '#0e1a32',
          800: '#101c36', // Elevated
          700: '#172a50',
          border: 'rgba(59, 130, 246, 0.16)',
          borderHover: '#3b82f6',
        },
        brand: {
          blue: '#2563eb',
          lightBlue: '#60a5fa',
          tag: 'rgba(30, 58, 102, 0.55)',
          tagText: '#93c5fd',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '4px',
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        full: '9999px',
      }
    },
  },
  plugins: [],
}

