/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        themeBg: "#fffff",
        btnBg: "#1A6EFC",
        mediaLinksBg: "#DFE4EA",
        hoverBg: "#FFC33D",
      },
      boxShadow: {
        newsLetterShadow: "1em 0em 14em 0.1em black",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
