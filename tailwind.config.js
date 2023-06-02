/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
        // hero: "url('https://segurossuratravel.com/en/images/slider/seguros.jpg')",
      },
      colors: {
        ptri: {
          primary: "#1484AB",
          secondary: "#00C1FF",
          neutralwarm: "#E6F4F1",
          neutralcool: "#ECFCFF",
          yellow: "#EEE8A9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
