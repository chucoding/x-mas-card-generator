/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "none" },
        },
        fadeout: {
          "0%": { opacity: 1, transform: "none" },
          "100%": { opacity: 0, transform: "translateY(20px)" },
        },
      },
      animation: {
        fadein: "fadein 1.5s ease-in-out",
        fadeout: "fadeout 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
