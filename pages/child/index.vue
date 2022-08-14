<template>
  <div class="o-container">
    <div class="hooper">
      <hooper :settings="hooperSettings">
        <slide>
          <div class="slider12">
            <div class="content">
              <div class="parent_jobs">
              <h1>Iş görnüşleri</h1>
                <Jobs />
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slider12 slider13">
            <div class="content">
              <div class="parent_jobs">
                <h1>Iş görnüşleri</h1>
                <Jobs />
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slider12 slider14">
            <div class="content">
              <div class="parent_jobs">
                <h1>Iş görnüşleri</h1>
                <Jobs />
              </div>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
        <hooper-progress slot="hooper-addons"></hooper-progress>
      </hooper>
    </div>
  </div>
</template>

<script>
import Jobs from './../../components/jobs.vue'
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'
import Header from './../../components/header.vue'
export default {
  components: {
    Header,
    Jobs,
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  computed: {
    hooperSettings() {
      const settings = {
        itemsToShow: 1,
        centerMode: true,
        autoPlay: true,
        playSpeed: 3000,
        transition: 1100,
        hoverPause: false,
        infiniteScroll: true,
        wheelControl: false,
      }
      return settings
    },
  },
}
</script>


<style>
</style>