module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#4F46E5", // Violet primary color
        "primary-dark": "#4C1D95",
        accent: "#22C55E", // Green accent color
      },
    },
  },
  plugins: [],
};
