<template>
  <header class="header">
    <nav>
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  color: #fff;
  background-color: #f60;
  display: flex;
  padding: 8px;
}

.header .router-link-exact-active {
  color: #fff;
}
</style>
