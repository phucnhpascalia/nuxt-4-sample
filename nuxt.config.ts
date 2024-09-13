export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    // head
    head: {
      title: "Nuxt 3",
      charset: "utf-8",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt3",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],

  plugins: ["@/plugins/antd"],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
  },

  typescript: {
    typeCheck: true,
  },

  runtimeConfig: {
    // Private keys are only available on the server
    apiBase: process.env.NUXT_API_SERVER_BASE,
    apiServerToken: process.env.NUXT_API_SERVER_TOKEN,
    authServer: process.env.NUXT_AUTH_SERVER_BASE,

    // Public keys that are exposed to the client
    public: {},
  },

  i18n: {
    langDir: "locales",
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "ja",
        name: "Japanese",
        file: "ja.json",
      },
    ],
  },

  compatibilityDate: "2024-09-04",
});
