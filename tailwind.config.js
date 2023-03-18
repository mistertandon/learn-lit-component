module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/*.{html, js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',
      'xxxl': '1920px',
    },
    extend: {},
  },
  plugins: [],
};
