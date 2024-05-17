/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(-500%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
        slideInBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(500%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
      },

      animation: {
        slideInRight: "slideInRight 1000ms ease-in-out",
        slideInLeft: "slideInLeft 1000ms ease-in-out",
        slideInTop: "slideInTop 1000ms ease-in-out",
        slideInBottom: "slideInBottom 1000ms ease-in-out ",
      },
    },
  },
  plugins: [require("./src/plugins/openVariants")],
};
