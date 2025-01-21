/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,cjs,mjs,ts,cts,mts}"],
  theme: {
    extend: {
      colors: {
        profileSectionTheme: "#1D2A46",
        profileCircleColor: "#FCB301",
        buttonBg: "#2A3751",
        borderBtnColor: "#37425B",
      },
      fontFamily: {
        CaustenFont: ["Causten", "sans-serif"],
        CaustenFontBold: "Causten bold",
      },
    },
  },
  plugins: [],
};
