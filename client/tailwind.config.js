/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      custom: "18% 82% 34% 66% / 67% 19% 81% 33%",
      custom2: "77% 23% 78% 22% / 24% 76% 24% 76%",
      custom3: "29% 71% 23% 77% / 68% 28% 72% 32%",
      custom4:"56% 44% 34% 66% / 53% 52% 48% 47% ",
      custom5 :"33% 67% 28% 72% / 54% 37% 63% 46% "
    },
  },
  plugins: [],
};
