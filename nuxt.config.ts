// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt'],
    future: {
        compatibilityVersion: 4
    },
    typescript: {
        typeCheck: true
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
        },
    },
})