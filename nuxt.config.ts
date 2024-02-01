// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/supabase',
    '@nuxtjs/seo',
  ],
  supabase: {
    // Options
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [
        '/',
        '/contact',
        '/pricing',
        '/privcacy',
        '/security',
        '/terms',
        '/about',
        '/blog',
        '/blog/*',
      ],
      cookieRedirect: false,
    },
  },
});
