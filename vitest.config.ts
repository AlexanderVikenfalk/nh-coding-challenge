import {
    defineVitestConfig
} from '@nuxt/test-utils/config'
import {fileURLToPath, URL} from 'node:url';


export default defineVitestConfig
({
    test: {
        globals: true,
        environment: 'nuxt',
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./app', import.meta.url)),
            '~': fileURLToPath(new URL('./', import.meta.url)),
        },
    },
})