/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#0D1B2A', // Deep trust foundation - midnight navy
        'secondary': '#1976FF', // Innovation energy - electric blue
        'accent': '#FF6B6B', // Action clarity - neon coral
        
        // Background Colors
        'background': '#FAFBFC', // Clean content canvas - light gray
        'surface': '#F5F7FA', // Subtle card elevation - light gray
        
        // Text Colors
        'text-primary': '#1A202C', // High contrast readability - charcoal
        'text-secondary': '#4A5568', // Clear hierarchy - medium gray
        
        // Status Colors
        'success': '#10B981', // Positive progress confirmation - emerald green
        'warning': '#F59E0B', // Helpful urgency - amber
        'error': '#EF4444', // Constructive concern - red
        
        // Additional Brand Colors
        'trust': '#2E7D32', // Stability and growth - forest green
        'conversion': '#FF4444', // Conversion action - action red
        
        // Extended Color Palette
        'primary-50': '#F8FAFC',
        'primary-100': '#F1F5F9',
        'primary-200': '#E2E8F0',
        'primary-300': '#CBD5E1',
        'primary-400': '#94A3B8',
        'primary-500': '#64748B',
        'primary-600': '#475569',
        'primary-700': '#334155',
        'primary-800': '#1E293B',
        'primary-900': '#0F172A',
        
        'secondary-50': '#EFF6FF',
        'secondary-100': '#DBEAFE',
        'secondary-200': '#BFDBFE',
        'secondary-300': '#93C5FD',
        'secondary-400': '#60A5FA',
        'secondary-500': '#3B82F6',
        'secondary-600': '#2563EB',
        'secondary-700': '#1D4ED8',
        'secondary-800': '#1E40AF',
        'secondary-900': '#1E3A8A',
        
        'accent-50': '#FEF2F2',
        'accent-100': '#FEE2E2',
        'accent-200': '#FECACA',
        'accent-300': '#FCA5A5',
        'accent-400': '#F87171',
        'accent-500': '#EF4444',
        'accent-600': '#DC2626',
        'accent-700': '#B91C1C',
        'accent-800': '#991B1B',
        'accent-900': '#7F1D1D',
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(13, 27, 42, 0.15)',
        'elevation': '0 4px 20px rgba(13, 27, 42, 0.1)',
        'cta': '0 8px 25px rgba(255, 107, 107, 0.3)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scaleIn': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}