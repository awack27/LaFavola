/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bronze: {
          50: '#fbf8f1',
          100: '#f5ecda',
          200: '#e8d5b0',
          300: '#d9bd87',
          400: '#c9a463',
          500: '#b8893f',
          600: '#a0742f',
          700: '#825c25',
          800: '#5f431c',
          900: '#3d2c14',
          950: '#241a0c',
        },
        gold: {
          50: '#fdfaf0',
          100: '#faf2d4',
          200: '#f3e3a3',
          300: '#e9cd6a',
          400: '#dcb03e',
          500: '#c89a2a',
          600: '#a87a20',
          700: '#855d1c',
          800: '#634a1c',
          900: '#4a3818',
        },
        charcoal: {
          50: '#f6f5f3',
          100: '#e8e6e1',
          200: '#d1cdc4',
          300: '#b0a99c',
          400: '#8a8071',
          500: '#6f6557',
          600: '#564e43',
          700: '#3f3930',
          800: '#2a251f',
          900: '#1a1611',
          950: '#0f0d0a',
        },
        cream: '#fdfbf7',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
