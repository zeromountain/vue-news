<template>
  <div>
    <h1>Jobs</h1>
    <ul>
      <li v-for="job in fetchedJobs" :key="job.id">
        <a :href="job.url" target="_blank">{{ job.title }}</a>
        <small>{{ job.domain }} {{ job.time_ago }} </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  created() {
    console.log("JobsView mounted");
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
