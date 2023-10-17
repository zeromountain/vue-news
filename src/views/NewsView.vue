<template>
  <div>
    <h1>News</h1>
    <ul>
      <li v-for="item in news" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsList } from "@/api";

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    console.log("NewsView created");
    fetchNewsList()
      .then((response) => {
        console.log(response);
        this.news = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    console.log("NewsView mounted");
  },
};
</script>

<style></style>
