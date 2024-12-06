/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      workSans: ["Work Sans", "sans-serif"],
    },
    fontSize: {
      h1: "3rem",
      h2: "2rem",
      h3: "1.5rem",
      h4: "1.25rem",
      body: "1rem",
      info: ".875rem",
      bullet: "1rem",
      action: "1rem",
    },
    lineHeight: {
      h1: "3.6rem",
      h2: "2.4rem",
      h3: "1.8rem",
      h4: "1.5rem",
      body: "1.4rem",
      info: "1.225rem",
      bullet: "1.2rem",
      action: "1rem",
    },
    colors: {
      main01: "hsla(170, 100%, 77%, 1)",
      main02: "hsla(170, 81%, 74%, 1)",
      main03: "hsla(170, 56%, 66%, 1)",
      main04: "hsla(170, 40%, 58%, 1)",
      main05: "hsla(170, 30%, 50%, 1)",
      main06: "hsla(170, 29%, 43%, 1)",
      main07: "hsla(170, 29%, 35%, 1)",
      main08: "hsla(171, 29%, 27%, 1)",
      main09: "hsla(170, 29%, 19%, 1)",
      main10: "hsla(169, 29%, 12%, 1)",

      neutral01: "hsla(170, 100%, 93%, 1)",
      neutral02: "hsla(170, 58%, 88%, 1)",
      neutral03: "hsla(170, 30%, 79%, 1)",
      neutral04: "hsla(170, 18%, 69%, 1)",
      neutral05: "hsla(170, 12%, 60%, 1)",
      neutral06: "hsla(170, 8%, 51%, 1)",
      neutral07: "hsla(170, 8%, 42%, 1)",
      neutral08: "hsla(170, 8%, 32%, 1)",
      neutral09: "hsla(170, 8%, 23%, 1)",
      neutral10: "hsla(170, 8%, 23%, 1)",

      white: "hsla(0, 0%, 100%, 1)",
      black: "hsla(0, 0%, 0%, 1)",

      action01: "hsla(290, 100%, 77%, 1)",
      action02: "hsla(290, 81%, 74%, 1)",
      action03: "hsla(290, 56%, 66%, 1)",
      action04: "hsla(290, 40%, 58%, 1)",
      action05: "hsla(290, 30%, 50%, 1)",
      action06: "hsla(290, 29%, 43%, 1)",
      action07: "hsla(290, 29%, 35%, 1)",
      action08: "hsla(291, 29%, 27%, 1)",
      action09: "hsla(290, 29%, 19%, 1)",
      action10: "hsla(289, 29%, 12%, 1)",

      accent01: "hsla(50, 100%, 77%, 1)",
      accent02: "hsla(50, 81%, 74%, 1)",
      accent03: "hsla(50, 56%, 66%, 1)",
      accent04: "hsla(50, 40%, 58%, 1)",
      accent05: "hsla(50, 30%, 50%, 1)",
      accent06: "hsla(50, 29%, 43%, 1)",
      accent07: "hsla(50, 29%, 35%, 1)",
      accent08: "hsla(51, 29%, 27%, 1)",
      accent09: "hsla(50, 29%, 19%, 1)",
      accent10: "hsla(49, 29%, 12%, 1)",

      transparent: "transparent",
    },
    padding: {
      s: "0.5rem",
      m: "1rem",
      l: "1.5rem",
      xl: "3rem",
      xxl: "3.5rem",
      xxxl: "6rem",
    },
    gap: {
      xxs: "0.25rem",
      sx: "0.5rem",
      s: "1rem",
      m: "1.5rem",
      l: "2rem",
      xl: "3rem",
    },
    borderRadius: {
      default: "0.5rem",
      rounded: "6rem",
    },
    extend: {
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
