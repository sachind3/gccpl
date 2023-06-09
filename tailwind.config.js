/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#effefb",
          100: "#cafdf6",
          200: "#94fbef",
          300: "#57f1e5",
          400: "#24ddd3",
          500: "#0bb7b1",
          600: "#069b99",
          700: "#0a7b7a",
          800: "#0d6262",
          900: "#105051",
          950: "#022e31",
        },
        lime: {
          50: "#f8faeb",
          100: "#eef3d4",
          200: "#dee9ad",
          300: "#c7d97d",
          400: "#afc754",
          500: "#9fbc3b",
          600: "#718927",
          700: "#566922",
          800: "#465420",
          900: "#3c481f",
          950: "#1f270c",
        },
        orange: {
          50: "#fff7ed",
          100: "#feeed6",
          200: "#fcd9ac",
          300: "#f9bc78",
          400: "#f69641",
          500: "#f37b21",
          600: "#e45e12",
          700: "#bd4611",
          800: "#963816",
          900: "#793015",
          950: "#411609",
        },
      },
    },
  },
  plugins: [],
};
