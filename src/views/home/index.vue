
<template>
  <main class="content">
    <img class="banner" src="@/assets/img/banner-bg.png" alt="">
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </main>
</template>
<script setup>
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<script>
export default {
  name: 'Home'
}
</script>
<style scoped lang="scss">
main.content {
  width: 100%;
  /* width: 1220px; */
  margin: 60px auto 0;
  background-color: #141619;
  /* background-image: url(@/assets/img/banner-bg.png); */
  background-size: 102% auto;
  background-repeat: no-repeat;
  height: 2000px;
  .banner {
    width: 100%;
  }
}
.read-the-docs {
  color: #888;
}
</style>
