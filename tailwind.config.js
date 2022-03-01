module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            Poppins: ["Poppins"],
        },
    },
},
  plugins: [require("tailwind-scrollbar-hide")],
}