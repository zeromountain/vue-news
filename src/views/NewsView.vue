<template>
  <div>
    <h1>News</h1>
    <ul>
      <li v-for="item in fetchedNews" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <small>{{ item.user }} {{ item.time_ago }} </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  created() {
    console.log("NewsView created");
    this.$store.dispatch("FETCH_NEWS");
  },
  mounted() {
    console.log("NewsView mounted");
  },
};
</script>

<style></style>
