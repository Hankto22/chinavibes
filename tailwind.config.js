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
          red: '#DC2626', // Tailwind red-600
          blue: '#2563EB', // Tailwind blue-600
        },
        secondary: {
          red: '#EF4444', // Tailwind red-500
          blue: '#3B82F6', // Tailwind blue-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}