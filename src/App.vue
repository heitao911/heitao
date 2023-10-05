<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>
<script setup>
import Footer from "@/components/BgFooter.vue";
</script>

<style scoped>
#app {
  width: 100%;
  margin: 0 auto;
  overflow: auto;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
