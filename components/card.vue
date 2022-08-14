<template>
  <div class="card">
    <img :src="require(`~/assets/icons/${img}`)" alt="" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>