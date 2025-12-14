/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3F5F7", // Apple-esque light gray
        surface: "#FFFFFF", // Pure white for cards
        border: "#E5E7EB", // Subtle border
        primary: "#111111", // Dark text
        secondary: "#6B7280", // Gray text
        accent: {
          blue: "#007AFF", // System Blue
          orange: "#FF9500", // System Orange
          green: "#34C759", // System Green
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Professional Tech Headings
        body: ['Inter', 'sans-serif'], // Readable UI text
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'bento': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'bento-hover': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'bento': '2rem', // Signature large curves
      }
    },
  },
  plugins: [],
}
