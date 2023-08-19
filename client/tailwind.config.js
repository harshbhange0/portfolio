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
      custom4: "56% 44% 34% 66% / 53% 52% 48% 47% ",
      custom5: "33% 67% 28% 72% / 54% 37% 63% 46% ",
    },
    dropShadow:{

      dark_Shadow:"0 0 0.1rem rgb(30 41 59)" ,
      dark_Shadow_sm:"0 0 0.1rem rgb(85, 118, 170)" ,
      light_Shadow:" 0 0 0.1rem rgb(241 245 249)",
      light_Shadow_sm:" 0 0 0.1rem rgb(237, 242, 247)",
    },
    boxShadow:{
      sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",
      shadow:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md	: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg	: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl	: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      inner :" inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      custom:"0 0 .5rem 0 ",
      none:" 0 0 #0000"
    }
  },
  plugins: [],
};
