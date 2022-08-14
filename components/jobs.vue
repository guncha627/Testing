<template>
  <div class="container">
    <div class="job_content" v-for="(e, i) in jobData" :key="i">
      <Job :name="e.name" :text="e.text" />
    </div>
  </div>
</template>

<script>
import Job from './job.vue'
export default {
  data() {
    const jobData = [
      {
        name: 'Hemişelik',
        text: 'Full-time employment often comes with benefits that are not typically offered to part-time, temporary, or flexible workers, such as annual leave, sick leave, and health insurance. Part-time jobs are mistakenly thought by some to not be careers. Full-time employment often comes with benefits that are not typically offered to part-time, temporary, or flexible workers...',
      },
      {
        name: 'Wagtlaýyn',
        text: 'Full-time employment often comes with benefits that are not typically offered to part-time, temporary, or flexible workers, such as annual leave, sick leave, and health insurance. Part-time jobs are mistakenly thought by some to not be careers. Full-time employment often comes with benefits that are not typically offered to part-time, temporary, or flexible workers...',
      },
      {
        name: 'Sagatlaýyn',
        text: 'Full-time employment often comes with benefits that are not typically offered to part-time, temporary, or flexible workers, such as annual leave, sick leave, and health insurance. Part-time jobs are mistakenly thought by some to not be careers. Full-time employment often comes with benefits that are not typically offered to part-time, temporary, or flexible workers...',
      },
    ]
    return {
      jobData,
    }
  },
  components: {
    Job,
  },
}
</script>

<style>
</style>