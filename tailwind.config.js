/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f7f9fc',
        surface: '#ffffff',
        primary: '#3b82f6',
        secondary: '#10b981',
        accent: '#f59e0b',
        textPrimary: '#1f2937',
        textSecondary: '#6b7280',
      },
    },
  },
  plugins: [],
}
