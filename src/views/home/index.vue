<template>
  <div>
    <Header />

    <main class="content">
      <!-- <img class="banner" src="@/assets/img/banner-bg.png" alt=""> -->
      <AdBanner />
      <!-- <HelloWorld /> -->
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AdBanner from "./AdBanner.vue";
import Header from "@/components/BgHeader.vue";
</script>
<script>
export default {
  name: "Home",
};
</script>
<style scoped lang="scss">
main.content {
  width: 100%;
  @media only screen and (min-width: 900px) {
    min-width: 1420px;
    background-image: url(@/assets/images/img/banner-bg.png);
    background-size: 100% auto;
    background-repeat: no-repeat;
    margin: 60px auto 0;
  }
  padding-top: 80px;
  @include media(M) {
    padding-top: 60px;
  }
  background-color: #141619;

  height: 2000px;
  .banner {
    width: 100%;
  }
}
</style>
