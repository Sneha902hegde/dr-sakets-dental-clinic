/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef4fa',
          100: '#d5e3f3',
          200: '#abc7e7',
          300: '#7da5d6',
          400: '#4a7fbf',
          500: '#2a60a3',
          600: '#1d4e8c',
          700: '#0F4C81',
          800: '#0c3d68',
          900: '#0a3254',
          950: '#06203a',
        },
        accent: {
          50: '#effbfa',
          100: '#c8f5f1',
          200: '#90ebe4',
          300: '#52dcd3',
          400: '#00B8A9',
          500: '#00a598',
          600: '#00857c',
          700: '#0a6b64',
          800: '#105650',
          900: '#114842',
        },
        ink: {
          50: '#F8FAFC',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(15, 76, 129, 0.12)',
        card: '0 20px 50px -24px rgba(15, 76, 129, 0.18)',
        glow: '0 0 0 5px rgba(0, 184, 169, 0.12)',
        'inner-soft': 'inset 0 1px 0 0 rgba(255,255,255,0.6)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.6' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
