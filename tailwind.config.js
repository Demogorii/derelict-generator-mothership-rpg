module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        radjhani: "Rajdhani",
        teko: "Teko",
      },
      colors: {
        lime: "lime",
        cyan: "cyan",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
