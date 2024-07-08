import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/css/main.css"],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { as: 'Aura', from: '~/presets/aura' }
  },
  
});
