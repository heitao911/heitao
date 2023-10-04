
<template>
  <main class="content">
    <Header />

    <!-- <img class="banner" src="@/assets/img/banner-bg.png" alt=""> -->
    <AdBanner />
    <!-- <HelloWorld /> -->
  </main>
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue'
import AdBanner from './AdBanner.vue'
import Header from "@/components/BgHeader.vue"

</script>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped lang="scss">
main.content {
  width: 100%;
  min-width: 1420px;
  margin: 60px auto 0;
  padding-top: 80px;
  background-color: #141619;
  background-image: url(@/assets/images/banner-bg.png);
  background-size: 102% auto;
  background-repeat: no-repeat;
  height: 2000px;
  .banner {
    width: 100%;
  }
}
</style>
