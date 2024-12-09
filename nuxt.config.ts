// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/kennrhey-miraflores-portfolio/', // Replace with your repository name
  },
  compatibilityDate: '2024-04-03',
  devtools: { 
    enabled: false 
  },
  css: ["~/assets/styles/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/main.scss" as main;`,
        }
      }
    }
  },
  ssr: false,
})
