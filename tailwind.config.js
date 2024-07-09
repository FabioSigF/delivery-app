/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "presets/**/*.{js,vue,ts}", // this is optional if you are using @nuxtjs/tailwindcss
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        "primary-inverse": "rgb(var(--primary-inverse))",
        "primary-hover": "rgb(var(--primary-hover))",
        "primary-active-color": "rgb(var(--primary-active-color))",

        "primary-highlight":
          "rgb(var(--primary)/var(--primary-highlight-opacity))",
        "primary-highlight-inverse": "rgb(var(--primary-highlight-inverse))",
        "primary-highlight-hover":
          "rgb(var(--primary)/var(--primary-highlight-hover-opacity))",

        "primary-50": "rgb(var(--primary-50))",
        "primary-100": "rgb(var(--primary-100))",
        "primary-200": "rgb(var(--primary-200))",
        "primary-300": "rgb(var(--primary-300))",
        "primary-400": "rgb(var(--primary-400))",
        "primary-500": "rgb(var(--primary-500))",
        "primary-600": "rgb(var(--primary-600))",
        "primary-700": "rgb(var(--primary-700))",
        "primary-800": "rgb(var(--primary-800))",
        "primary-900": "rgb(var(--primary-900))",
        "primary-950": "rgb(var(--primary-950))",
        
        "secondary-inverse": "rgb(var(--secondary-inverse))",
        "secondary-hover": "rgb(var(--secondary-hover))",
        "secondary-active-color": "rgb(var(--secondary-active-color))",

        "secondary-highlight":
          "rgb(var(--secondary)/var(--secondary-highlight-opacity))",
        "secondary-highlight-inverse": "rgb(var(--secondary-highlight-inverse))",
        "secondary-highlight-hover":
          "rgb(var(--secondary)/var(--secondary-highlight-hover-opacity))",

        "secondary-50": "rgb(var(--secondary-50))",
        "secondary-100": "rgb(var(--secondary-100))",
        "secondary-200": "rgb(var(--secondary-200))",
        "secondary-300": "rgb(var(--secondary-300))",
        "secondary-400": "rgb(var(--secondary-400))",
        "secondary-500": "rgb(var(--secondary-500))",
        "secondary-600": "rgb(var(--secondary-600))",
        "secondary-700": "rgb(var(--secondary-700))",
        "secondary-800": "rgb(var(--secondary-800))",
        "secondary-900": "rgb(var(--secondary-900))",
        "secondary-950": "rgb(var(--secondary-950))",

        "surface-0": "rgb(var(--surface-0))",
        "surface-50": "rgb(var(--surface-50))",
        "surface-100": "rgb(var(--surface-100))",
        "surface-200": "rgb(var(--surface-200))",
        "surface-300": "rgb(var(--surface-300))",
        "surface-400": "rgb(var(--surface-400))",
        "surface-500": "rgb(var(--surface-500))",
        "surface-600": "rgb(var(--surface-600))",
        "surface-700": "rgb(var(--surface-700))",
        "surface-800": "rgb(var(--surface-800))",
        "surface-900": "rgb(var(--surface-900))",
        "surface-950": "rgb(var(--surface-950))",

        secondary: "#F51E01",
        light_border: "#E3E3E3",
        text_dark: "#222222",
        text_light: "#fff",
        text_dark_light: "#696969",
        text_gray: "#A6A6AA",
        text_success: "#51B960",
        text_danger: "#D62400",
        text_warning: "#FBBC05",

        bg_light_green: "#EAF8EC",
        bg_light_gray: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
