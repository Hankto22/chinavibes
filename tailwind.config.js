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
          green: '#2d5a4a',
        },
        secondary: {
          red: '#EF4444', // Tailwind red-500
          blue: '#3B82F6', // Tailwind blue-500
          green: '#b6e2d3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        redcrane: {
          primary: "#dc2626", // red-600
          secondary: "#2563eb", // blue-600
          accent: "#2d5a4a", // green
          neutral: "#374151", // gray-700
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}