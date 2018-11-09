module.exports = {
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
  loading: { color: '#3B8070' },
  plugins: ['~/plugins/vue-awesome'],
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
    }
  }
}

