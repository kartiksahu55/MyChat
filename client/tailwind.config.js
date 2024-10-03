/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#202C33",
        secondary: "#111B21",
        tertiary: "#00A884",
        black: "#202C33",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      width: {
        sidebar: "70px",
        main_section: "30%",
        chat_window: "70%",
      },
      padding: {
        outer: "10px",
      },
    },
  },
  plugins: [],
};
