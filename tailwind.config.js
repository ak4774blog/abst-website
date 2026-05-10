// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lexend"', 'sans-serif'],
        serif: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
