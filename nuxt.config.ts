// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      theme: {
        preset: Lara
      }
    }
  },
  css: [
    'primeicons/primeicons.css'
  ]
})