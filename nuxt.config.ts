import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
  },
  app: {
    head: {
      title: 'Binninger Family Dentistry | Brookfield, WI',
      meta: [
        {
          name: 'description',
          content: 'Gentle, family dentistry in Brookfield, Wisconsin. Same-day emergency care, most major PPO insurance accepted, and 50+ years serving Milwaukee-area families.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Karla:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
});
