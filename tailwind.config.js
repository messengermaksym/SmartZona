/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        white: '#0f172a', // Slate-900 for dark headings
        zinc: {
          50: '#0f172a',
          100: '#1e293b',
          200: '#334155',
          300: '#475569',
          400: '#64748b',
          500: '#94a3b8',
          600: '#cbd5e1',
          700: '#e2e8f0',
          800: '#f1f5f9', // Light gray-blue panel bg
          900: '#f8fafc', // Very light background
          950: '#ffffff', // Main page background (pure white)
        },
        amber: {
          400: '#60a5fa', // Blue accent
          500: '#3b82f6', // Primary blue
          600: '#2563eb', // Darker blue
        }
      }
    }
  },
  plugins: [],
}
