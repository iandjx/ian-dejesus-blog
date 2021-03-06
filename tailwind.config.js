module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Titillium Web", "ui-sans-serif"],
    },
    extend: {
      maxHeight: {
        500: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
