import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: 'rgb(255, 0, 128)',
          light: 'rgb(255, 230, 242)',
          dark: 'rgb(51, 51, 51)',
          primary: 'rgb(255, 0, 128)',
          accent: 'rgb(168, 85, 247)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        blob: 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    }
  },
  plugins: [],
};

export default config;
