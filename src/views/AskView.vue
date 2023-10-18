<template>
  <div>
    <h1>Ask</h1>
    <ul>
      <li v-for="item in fetchedAsk" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
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
