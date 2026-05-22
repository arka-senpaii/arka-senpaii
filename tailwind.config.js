/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables toggleable dark mode via class on html
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'light-bg': '#f5f5f5',
        'light-text': '#111111',
        'accent-purple': '#A78BFA',
        'accent-blue': '#38BDF8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
