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
    }
  },
  plugins: [],
}
