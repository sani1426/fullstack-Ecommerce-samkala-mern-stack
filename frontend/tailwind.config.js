/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: {
          500: '#dc2626',
          600: '#b91c1c',
          400: '#F4790B',
          300 : '#E6522B',
          200: '#DC3348'
        },
        coral: {
          500: '#15BF59',
        },

        grey: {
          600: '#545454', 
        },

      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        poppinsbold: ['var(--font-poppins-bold)'],
      },
      backgroundImage: {
        'dotted-pattern': "url('/assets/images/dotted-pattern.png')",
        'hero-img': "url('/assets/images/hero.png')",
      },
    },
  },
  plugins: [],
}
