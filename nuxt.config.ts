// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  ssr: false,
  spaLoadingTemplate: true,
  vite: {
    vue: {
     template: {
       compilerOptions: {
         isCustomElement: (tag) => tag.includes('-')
       }
     }
    }
  }
})
