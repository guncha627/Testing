<template>
  <header>
    <div class="left">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="right">
      <ul>
        <li>Hossar</li>
        <li>Hemaýatkär</li>
      </ul>
      <img src="@/assets/profile.jpeg" alt="" />
      <div class="lang">
        <button class="dropbtn">{{ $t('language') }}</button>
        <div class="lang-content">
          <div v-for="(e, i) in locales" :key="i">
            <button @click="$i18n.setLocale(e.code)">
              {{ e.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
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

<style>
</style>