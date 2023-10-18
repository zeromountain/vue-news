<template>
  <div>
    <h1>Ask</h1>
    <ul>
      <li v-for="ask in fetchedAsk" :key="ask.id">
        <a :href="ask.url" target="_blank">{{ ask.title }}</a>
        <small>{{ ask.user }} {{ ask.time_ago }} </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
  },
  created() {
    console.log("AskView created");
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
