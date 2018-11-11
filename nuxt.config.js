const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Barlow|Germania+One', rel: 'stylesheet' }
    ],
    script: [
      { src: 'https://static.airtable.com/js/embed/embed_snippet_v1.js' },
      { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js' },
      { src: 'https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v2.12&appId=1515670032095765&autoLogAppEvents=1' }
    ]
  },
  css: [
    '~/css/main.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#A50E2F',
    height: '5px'
  },

  /*
  ** Global CSS
  */

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuecarousel.js', '~/plugins/vueclickoutside.js', '~/plugins/contentful.js', '~/plugins/component-hero.js', '~/plugins/v-img.js'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://saintescene.com',
    cacheTime: 1000 * 60 * 15,
    generate: true
  },
  manifest: {
    name: 'Sainte Scène',
    lang: 'fr'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/onesignal',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
