import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|chip|input|theme|system|switch|navbar).js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
        poppins: ["var(--font-poppins)"],
        quicksand: ["var(--font-quicksand)"],
        robotomono: ["var(--font-robotomono)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
