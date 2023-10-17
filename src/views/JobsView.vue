<template>
  <div>
    <h1>Jobs</h1>
    <ul>
      <li v-for="item in jobs" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchJobsList } from "@/api";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created: function () {
    console.log("JobsView mounted");
    fetchJobsList()
      .then((response) => {
        console.log(response);
        this.jobs = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
