// https://nuxt.com/docs/api/configuration/nuxt-config
function base_url() {
  const env = process.env.DEPLOY_ENV;
  switch (env) {
    case "github":
      return "/blog/";
    case "vercel":
    default:
      return "/";
  }
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/styles/index.css"
  ],
  app: {
    baseURL: base_url(),
    head: {
      style: [
        { innerHTML: "@layer base, utilities, config, comp, layout, page;" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: `${base_url()}favicon.ico` }
      ]
    }
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "nuxt-lodash",
    "nuxt-icon",
    "dayjs-nuxt",
    "@vueuse/nuxt"

  ],
  vite: {
    vue: {
      script: {
        propsDestructure: true
      }
    }
  },
  components: {
    global: true,
    dirs: ["~/components"]
  },
  typescript: {
    typeCheck: true
  },
  devServer: {
    port: 51714
  },
  googleFonts: {
    families: {
      "Fira Code": true,
      "Source Code Pro": true
    }
  }
});
