// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
  // ssr: true,
  // content: {
  //   experimental: {
  //     clientDB: true,
  //   },
  // },
  content: {
    sources: {
      // Define the default content source
      content: {
        driver: 'fs',
        // prefix: "/", // Optional: You can set a prefix if needed
        base: resolve(__dirname, 'app/content'), // Path to your content directory
      },
    },
  },
})
