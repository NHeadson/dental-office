import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'vuetify-nuxt-module'],
  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
  },
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
