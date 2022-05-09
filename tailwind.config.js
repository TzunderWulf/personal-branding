module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-columns": "200px minmax(900px, 1fr)",
      },
      gridTemplateRows: {
        "main-rows": "auto 100px",
      }
    },
  },
  plugins: [],
}