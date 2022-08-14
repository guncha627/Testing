<template>
  <div class="cover">
    <div class="main-section">
      <div class="side-menu">
        <ul>
          <li v-for="(e, i) in links" :key="i">
            <nuxt-link class="o_d" :to="e.href">
              <div class="div">
                <img :src="require(`@/assets/icons/${e.img}`)" alt="" />
              </div>
              <p>{{ $tt(e.name_tm, e.name_en, e.name_ru) }}</p>
            </nuxt-link>
          </li>
          <!-- <li>
            <div class="o_d">
              <div class="div">
                <img src="@/assets/icons/2.png" alt="" />
              </div>
              <p>Garrylar</p>
            </div>
          </li>
          <li>
            <div class="o_d">
              <div class="div">
                <img src="@/assets/icons/3.png" alt="" />
              </div>
              <p>Oy hyzmaty</p>
            </div>
          </li> -->
        </ul>
      </div>
      <div class="text">
        <h1>Hemaýatkar-rahatlyga tarap açar</h1>
        <h3>Siziň tutuş maşgalaňyz üçin</h3>
      </div>
      <div class="toggle_btns">
        <div class="parent">Hemaýatkär tap</div>
        <div class="parent">Iş ýa-da okuw tap</div>
      </div>
      <div class="search">
        <input type="text" placeholder="Şäher adyny ýazyň..." />
        <div class="p_search">Gözle</div>
      </div>
    </div>
    <div class="process_section">
      <div class="w_process">
        <h2>Ädimlerimiz</h2>
        <div class="radio">
          Gözle
          <input type="radio" name="profile" id="hemayatkar" checked />
          <label for="hemayatkar">Hemaýatkär?</label>
          <input type="radio" name="profile" id="is" />
          <label for="is">Iş?</label>
        </div>
      </div>
      <img class="arrows" src="@/assets/icons/arrow1.svg" id="arrow1" alt="" />
      <img class="arrows" src="@/assets/icons/arrow1.svg" id="arrow2" alt="" />
      <img class="arrows" src="@/assets/icons/arrow1.svg" id="arrow3" alt="" />
      <img class="arrows" src="@/assets/icons/arrow1.svg" id="arrow4" alt="" />
      <Cards />
    </div>
  </div>
</template>

<script>
// New comment
import Cards from './../components/cards.vue'
export default {
  name: 'IndexPage',
  components: {
    Cards,
  },
  data() {
    const links = [
      {
        id: 1,
        href: '/child',
        name_tm: 'Çaga',
        name_ru: 'Дети',
        name_en: 'Child',
        img: '1.png',
        active: false,
      },
      {
        id: 2,
        href: '/older',
        name_tm: 'Garrylar',
        name_ru: 'Пожилые',
        name_en: 'Older',
        img: '2.png',
        active: false,
      },
      {
        id: 3,
        href: '/house',
        name_tm: 'Öý hyzmaty',
        name_ru: 'ДомХоз',
        name_en: 'Caregiver',
        img: '3.png',
        active: false,
      },
    ]
    return {
      links,
    }
  },
}
</script>
