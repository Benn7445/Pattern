import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '175': '1.75',
      }
    },
    dropShadow: {
      glow: [
        "0 0px 20px rgba(22, 115, 222, 0.55)",
        "0 0px 65px rgba(22, 115, 222, 0.4)"
      ]
    },
    animation: {
      'bounce-soft': 'bounce-soft 3s linear infinite',
    },
    keyframes: {
      "bounce-soft": {
        '0%, 100%': {
          "transform": "translateY(-3%)",
          "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
        },
        '50%': {
          "transform": "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"
        }
      }

    }
  },
  plugins: [],
}
export default config
