/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette can be added here
      colors: {
        'base': '#efe7da',
        'section': '#f5efe5',
        'border-dark': '#191919',
        'gradient-start': '#E57A44',
        'gradient-end': '#69140E',
        'tag-bg': '#4a6b5a',
        'tag-text': '#1a2e24',
      },
      // Custom animations can be added here
      animation: {
        // Example: 'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 