/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
