
<template>
  <main class="content">
    <div class="cover"></div>
    <div class="form-wrap">
      <h2>黑桃出海防骗查询</h2>
      <el-input class="input" v-model="vague" placeholder="请输入客服飞机账号" size="large">
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
      <el-button class="search-btn" type="primary" size="large">查询验证</el-button>
      <el-text class="tips" type="info">您可以查看防骗指南 | 如遇到任何问题，请联系官方网站上的客服工作人员咨询。</el-text>
    </div>
  </main>
</template>
<script setup>
import { ref, defineAsyncComponent, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
const vague = ref('')

</script>
<script>
export default {
  name: 'Check',
}
</script>
<style>
#app{
  overflow: hidden !important;
}</style>
<style scoped lang="scss">
main.content {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(@/assets/images/check-bg.webp);
  // background-size: 102% auto;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  position: relative;
  .cover {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .form-wrap{
    position: relative;
    z-index: 10;
    width: 70%;
    max-width: 750px;
    margin: 100px auto;
    h2 {
      color: white;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .input{
      // height: px;
      font-size: 18px;
      line-height: 18px;
      font-weight: 700;
      font-family: rial, Helvetica, sans-serif
    }
    .search-btn{
      width: 100%;
      margin-top: 20px;
      font-size: 16px;
      background-color: #c9151d;
      // border: none;
      border:  1px solid #c9151d !important;
      border-radius: 4px;
      font-weight: 400;
      color: white ;
      &:hover{
        border-color:#db4047f9 !important;
        color: rgb(244, 235, 235) !important; 
        background-color: #db4047f9 !important;
      }
    }
    .tips {
      margin-top: 10px;
      display: block;
    }
  }
 
}
</style>
