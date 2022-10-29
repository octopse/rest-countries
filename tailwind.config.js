/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "nunito, sans-serif",
      },
      colors: {
        lmrs: {
          text: "#111517",
          back: "#fafafa",
          element: "#ffffff",
          input: "#858585",
        }
      },
    },
    screens: {
      'xxsm': '360px',
      'xsm': '495px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
