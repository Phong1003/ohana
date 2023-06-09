import { MIDDLEWARE } from "./constants/common";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ohanaliving",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/paginate.js", ssr: false },
    { src: "@/plugins/vue-multiselect.js", ssr: false },
    { src: "@/plugins/vClickOutside.js", ssr: false },
    { src: "@/plugins/vue-simple-suggest.js", ssr: false },
    { src: "@/plugins/vViewer.js", ssr: false },
    { src: "@/plugins/excelLib", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dayjs"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],

  router: {
    // middleware: [MIDDLEWARE.auth],
  },

  bootstrapVue: {
    icons: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  env: {
    API_URL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
