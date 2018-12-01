const nodeExternals = require('webpack-node-externals')
module.exports = {
  mode: 'spa',
  router: {
    base: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'categoria',
        path: '/category/:categoryId/:categoryUri?',
        component: resolve(__dirname, 'pages/list.vue')
      })
      routes.push({
        name: 'artista',
        path: '/artist/:artistId/:artistUri?',
        component: resolve(__dirname, 'pages/list.vue')
      })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'apilable',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: "msapplication-TileColor", content: "#ff4c3a" },
      { name: "theme-color", content: "#ff4c3a" }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      {rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Open+Sans"},
      { rel:"apple-touch-icon", sizes: "180x180", href: "favicon/apple-touch-icon.png" },
      { rel:"icon", type: "image/png", sizes: "32x32", href: "favicon/favicon-32x32.png" },
      { rel:"icon", type: "image/png", sizes: "16x16", href: "favicon/favicon-16x16.png" },
      { rel:"manifest", href: "favicon/site.webmanifest" },
      { rel:"mask-icon", href: "favicon/safari-pinned-tab.svg", color: "#ff4c3a" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FF4C3A' },

  modules: [
      '@nuxtjs/dotenv'
  ],

  plugins: [
    '~/plugins/vue-awesome',
    '~/plugins/api'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend (config, { isServer }) {
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    }
  },
  css: [
    '~/assets/main.css'
  ]
}

