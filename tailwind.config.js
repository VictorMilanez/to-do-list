/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bgPrimary: "hsl(235,24%,19%)",
          border: "hsl(237,14%,26%)",
          textPrimary: "hsl(234, 39%, 85%)",
          textSecondary: "hsl(234, 11%, 52%)",
          textHover: "hsl(236, 33%, 92%)",
        },
        light: {
          bgPrimary: "hsl(236,9%,61%)",
          border: "hsl(235, 19%, 35%)",
          textPrimary: "hsl(233, 11%, 84%)",
          textSecondary: "hsl(236, 9%, 61%)",
          textHover: "hsl(236, 33%, 92%)",
        },
      },
    },
  },
  plugins: [],
};
