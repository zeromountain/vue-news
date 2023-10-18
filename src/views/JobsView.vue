<template>
  <div>
    <h1>Jobs</h1>
    <ul>
      <li v-for="item in fetchedJobs" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
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
