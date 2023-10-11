<template>
  <div class="NOINfo"></div>
  <!-- <p class="page-container">404 page not found</p> -->
</template>
<script>
export default {
  data () {
    return {
      // locale: localStorage.getItem('locale')
    }
  }
}
</script>
<style lang="scss" scoped>
.NOINfo {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/img/404.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; //居中
}
</style>
