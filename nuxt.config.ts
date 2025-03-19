// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['@provetcloud/css'],
    modules: ['@pinia/nuxt', '@nuxt/test-utils/module'],
    ssr: false,
    spaLoadingTemplate: true,
    vite: {
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag: string) => tag.includes('-')
                }
            }
        },
    },
})