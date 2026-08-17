import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'vuetify-nuxt-module'],
  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
  },
  app: {
    head: {
      link: [
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
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dental',
        themes: {
          dental: {
            dark: false,
            colors: {
              primary: '#1B6E82',    
              secondary: '#EAF4F6',
              accent: '#2E9BB5',
              surface: '#FFFFFF',
              'on-primary': '#FFFFFF'
            }
          }
        }
      }
    }
  }
});
