const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        amber: {
          ...colors.amber,
          700: "#212121",
        },
        gold: "#C8B477",
        crimson: "#E35366",
      },
    },
  },
  plugins: [],
};
