
<template>
  <main class="content">
    <div class="cover"></div>
    <div class="form-wrap">
      <h2>黑桃出海防骗查询</h2>
      <el-input
        class="input"
        v-model="state.vague"
        placeholder="请输入用户名或者U地址查询"
        size="large"
        clearable
        show-word-limit
        maxlength="40"
        @keydown.enter="checkFn"
      >
      </el-input>
      <el-button
        class="search-btn"
        type="primary"
        size="large"
        @click="checkFn"
        :loading="state.loading"
        >查询验证</el-button
      >

      <el-alert
        class="check-result"
        v-if="state.isShowTip"
        :title="state.alertTitle"
        :description="state.description"
        show-icon
        :type="state.alertStatus"
      >
      </el-alert>

      <el-text class="tips" type="info"
        >可查询官方客服真伪以及输入U地址查询是否为骗子，有任何问题请联系官网客服人员。</el-text
      >
    </div>
  </main>
</template>
<script setup>
import {
  ref,
  defineAsyncComponent,
  reactive,
  onMounted,
  getCurrentInstance,
} from "vue";
// import { Search } from '@eement-plus/icons-vue'
import config from "@/common/config.js";
const { proxy } = getCurrentInstance();
const state = reactive({
  vague: "",
  loading: false,
  isShowTip: false,
  alertTitle: "",
  description: "",
  alertStatus: "",
});

onMounted(() => {
  console.log(config);
});
const checkFn = () => {
  state.isShowTip = false;
  state.vague = state.vague.trim();
  if (!state.vague) {
    proxy.$message.error("请输入用户名或者U地址查询");
    return;
  } else if (!state.vague.trim()) {
    proxy.$message.error("请输入合法用户名或者U地址查询");
    return;
  }
  state.loading = true;
  setTimeout(() => {
    state.loading = false;
    state.description = "";
    const whiteNameArr = config.whiteName.filter(
      (e) =>
        e.name === state.vague ||
        e.simpleName === state.vague ||
        e.linkName === state.vague
    );
    const uWhiteNameArr = config.uWhiteName.filter(
      (e) =>
        e.name === state.vague ||
        e.simpleName === state.vague ||
        e.linkName === state.vague
    );
    const uBlackNameArr = config.uBlackName.filter(
      (e) =>
        e.name === state.vague ||
        e.simpleName === state.vague ||
        e.linkName === state.vague
    );
    //  U地址白名单
    if (uWhiteNameArr.length) {
      state.alertStatus = "success";
      state.alertTitle = `【 ${state.vague} 】该地址为黑桃商务VIP会员专用。`;
      state.description = "谢谢您的查询！请放心使用";
      state.isShowTip = true;
      return;
    } else if (uBlackNameArr.length) {
      //  U地址黑名单
      state.alertStatus = "warning";
      state.alertTitle = `【 ${state.vague} 】该地址被多人标记为骗子，请停止交易！！！`;
      state.isShowTip = true;
      return;
    } else if (state.vague.length === 34) {
      // 34位U地址
      state.alertStatus = "error";
      state.alertTitle = `【 ${state.vague} 】该地址非会员专用，请谨慎交易。`;
      state.isShowTip = true;
      return;
    }
    // 飞机账号白名单
    if (whiteNameArr.length) {
      state.alertStatus = "success";
      state.alertTitle = `账号：【 ${state.vague} 】是黑桃集团客服人员。`;
      state.description = "谢谢您的查询！请放心使用";
    } else {
      state.alertStatus = "error";
      state.alertTitle = `账号：【 ${state.vague} 】不是黑桃集团客服人员，请核对后重新查询！`;
    }
    state.isShowTip = true;
  }, 1000);
};
</script>
<script>
export default {
  name: "Check",
};
</script>
<style>
#app {
  overflow: hidden !important;
}
</style>
<style scoped lang="scss">
main.content {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(@/assets/images/img/check-bg.webp);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  position: relative;
  .cover {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .form-wrap {
    position: relative;
    z-index: 10;
    width: 70%;
    @include media(M) {
      width: 85%;
    }
    max-width: 750px;
    margin: 100px auto;
    h2 {
      color: white;
      font-size: 28px;
      margin-bottom: 30px;
      text-align: center;
    }
    .input {
      font-size: 18px;
      line-height: 18px;
      font-weight: 700;
      font-family: rial, Helvetica, sans-serif;
    }
    .search-btn {
      width: 100%;
      margin-top: 15px;
      font-size: 16px;
      background-color: #c9151d;
      border: 1px solid #c9151d !important;
      border-radius: 4px;
      font-weight: 400;
      color: white;
      &:hover {
        border-color: #db4047f9 !important;
        color: rgb(244, 235, 235) !important;
        background-color: #db4047f9 !important;
      }
    }
    .tips {
      margin-top: 15px;
      display: block;
      font-size: 12px;
      text-align: center;
    }
    .check-result {
      padding: 10px 5px;
      margin-top: 15px;
    }
  }
}
</style>
