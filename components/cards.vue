<template>
  <div class="cards">
    <div class="card_content" v-for="(e, i) in processes" :key="i">
      <Card :img="e.img" :name="e.name" />
    </div>
  </div>
</template>

<script>
import Card from './card.vue'
export default {
  data() {
    const processes = [
      {
        id: 1,
        img: 'signup.svg',
        name: 'Hasap aç',
      },
      {
        id: 2,
        img: 'create.svg',
        name: 'Iş saýla',
      },
      {
        id: 3,
        img: 'profile.svg',
        name: 'Profil',
      },
      {
        id: 4,
        img: 'handshake.svg',
        name: 'Ylalaşyk',
      },
      {
        id: 5,
        img: 'pay.svg',
        name: 'Töleg',
      },
    ]

    let route_path = this.$route.params.id

    return {
      route_path,
      process: processes[route_path - 1],
      processes,
    }
  },
  components: {
    Card,
  },
}
</script>

<style>
</style>