<template>
  <section class="content">
    <div class="cover"></div>
    <div class="form-wrap">
      <h2>黑桃出海防骗查询</h2>
      <el-input class="input" v-model="state.vague" placeholder="请输入用户名或者U地址查询" size="large" clearable show-word-limit
        maxlength="40" @keydown.enter="checkFn">
      </el-input>
      <el-button class="search-btn" type="primary" size="large" @click="checkFn"
        :loading="state.loading">查询验证</el-button>
      <el-alert class="check-result" v-if="state.isShowTip" :title="state.alertTitle" :description="state.description"
        :closable="false" show-icon :type="state.alertStatus">
      </el-alert>

      <el-text class="tips" type="info">可查询官方客服真伪以及输入U地址查询是否为骗子，有任何问题请联系官网客服人员。<br />
        黑桃商务官网：<a href="https://www.heitao.org">https://www.heitao.org</a>
      </el-text>
    </div>
  </section>
</template>
<script setup name="Check">
import config from '@/common/config.js'
const { proxy } = getCurrentInstance()
const state = reactive({
  vague: '',
  loading: false,
  isShowTip: false,
  alertTitle: '',
  description: '',
  alertStatus: ''
})
const description = {
  tip1: '有任何疑问请联系官方客服',
  tip2: '强烈建议大家交易走担保!'
}
onMounted(() => {
  console.log(config)
})
const checkFn = () => {
  state.isShowTip = false
  state.vague = state.vague.trim()
  if (!state.vague) {
    proxy.$message.error('请输入用户名或者U地址查询')
    return
  } else if (!state.vague.trim()) {
    proxy.$message.error('请输入合法用户名或者U地址查询')
    return
  }
  state.loading = true
  setTimeout(() => {
    state.loading = false
    state.description = ''
    if (state.vague.length === 34) {
      const vip_U_whiteName = config.vip_U_whiteName.filter((e) => e === state.vague)
      const service_U_whiteName = config.service_U_whiteName.filter((e) => e === state.vague)
      const black_U_whiteName = config.black_U_whiteName.filter((e) => e === state.vague)
      //  34位 U地址白名单
      if (vip_U_whiteName.length) {
        state.alertStatus = 'success'
        state.alertTitle = `【 ${state.vague} 】该地址为黑桃商务VIP会员专用。`
        state.description = description.tip1
      } else if (service_U_whiteName.length) {
        state.alertStatus = 'success'
        state.alertTitle = `【 ${state.vague} 】该地址为黑桃商务官方专用。`
        state.description = description.tip1
      } else if (black_U_whiteName.length) {
        state.alertStatus = 'warning'
        state.alertTitle = `【 ${state.vague} 】该地址被多人标记为骗子，谨防上当受骗！`
        state.description = description.tip2
      } else {
        state.alertStatus = 'error'
        state.alertTitle = `【 ${state.vague} 】该地址非黑桃商务会员，建议交易走黑桃担保。`
        state.description = description.tip1
      }
    } else {
      // 会员白名单
      const vip_whiteName = config.vip_whiteName.filter((e) =>
        e === state.vague || '@' + e === state.vague || 'https://t.me/' + e === state.vague
      )
      const service_whiteName = config.service_whiteName.filter((e) =>
        e === state.vague || '@' + e === state.vague || 'https://t.me/' + e === state.vague
      )
      const black_whiteName = config.black_whiteName.filter((e) =>
        e === state.vague || '@' + e === state.vague || 'https://t.me/' + e === state.vague
      )
      if (vip_whiteName.length) {
        state.alertStatus = 'success'
        state.alertTitle = `【 ${state.vague} 】该用户为黑桃商务VIP会员。`
        state.description = description.tip1
      } else if (service_whiteName.length) {
        state.alertStatus = 'success'
        state.alertTitle = `【 ${state.vague} 】该用户为黑桃商务官方客服。`
        state.description = description.tip1
      } else if (black_whiteName.length) {
        state.alertStatus = 'warning'
        state.alertTitle = `【 ${state.vague} 】该用户被多人标记为骗子，谨防上当受骗！`
        state.description = description.tip2
      } else {
        state.alertStatus = 'error'
        state.alertTitle = `【 ${state.vague} 】该用户非黑桃商务会员，建议交易走黑桃担保`
        state.description = description.tip1
      }
    }
    state.isShowTip = true
  }, 1000)
}
</script>
<style scoped lang="scss">
section.content {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(@/assets/images/img/check-bg.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position-x: center; //居中
  background-repeat: no-repeat;
  overflow: auto;
  position: relative;

  .cover {
    width: 100vw;
    height: 100vh;
    // background-color: rgba(0, 0, 0, 0.3);
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
    margin: 100px auto 0;
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
      line-height: 16px;
      text-align: center;
      color: white;
      a {
        color: white;
        text-decoration: underline;
      }
    }

    .check-result {
      padding: 10px 5px;
      margin-top: 15px;
      :deep(.el-alert__description) {
        font-weight: 700;
      }
    }
  }
}
</style>
