
const base_url = 'http://localhost:3000/'
const kikagaku_url = 'https://www.kikagaku.co.jp/'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '株式会社キカガク | セミナーページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `js/lib/jquery-3.4.1.js` },
      { src: `js/lib/countTo.js` },
      { src: `js/lib/inview.js` },
      { src: `js/lib/ofi.js` },
      { src: `js/lib/pf.intrinsic.js` },
      { src: `js/lib/picturefill.js` },
      { src: `js/lib/pf.intrinsic.js` },
      { src: `js/lib/swiper.js` },
      { src: `js/front.js` },
      { src: `js/common.js` },
      { src: `js/loading.js` },
      { src: `js/member.js` }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/style.css',
    '~assets/css/lib/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  // ビルド後のフォルダ名
  generate: {
    dir: 'docs'
  }
}
