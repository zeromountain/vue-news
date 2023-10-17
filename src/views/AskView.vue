<template>
  <div>
    <h1>Ask</h1>
    <ul>
      <li v-for="item in ask" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAskList } from "@/api";
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    console.log("AskView created");
    fetchAskList()
      .then((response) => {
        console.log(response);
        this.ask = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
