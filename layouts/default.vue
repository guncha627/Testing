<template>
  <div class="main">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from './../components/footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
  computed: {
    router_path() {
      return this.$route.path
    },
    langCode() {
      return this.$i18n.locale
    },
    locales() {
      return this.$i18n.locales
    },
  },
  data() {
    const lang = [
      {
        name: 'TM',
        code: 'tm',
        file: 'tm.js',
      },
      {
        name: 'EN',
        code: 'en',
        file: 'en.js',
      },
      {
        name: 'RU',
        code: 'ru',
        file: 'ru.js',
      },
    ]
    return {
      lang,
    }
  },
}
</script>
