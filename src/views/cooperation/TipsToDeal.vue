<template>
  <div class="tips flex aic" v-if="gurantee">
    <img class="deal-icon" src="@/assets/images/img/deal-true.png" alt="">
    <div class="txt">
      官方提醒：该资源已支持黑桃担保，交易前需联系<a href="https://t.me/heitaoch004" target="_blank" class="link-btn"
        size="small">黑桃官方担保客服@heitaoch004</a>对接，建立Telegram交易群组，
      <b>交易担保群组必须由黑桃官方号建立，非黑桃官方客服建群交易一律无效。</b>
    </div>
  </div>
  <div v-else class="warn-tips flex aic">
    <img class="deal-icon" src="@/assets/images/img/deal-false.png" alt="">
    风险提示：该资源暂不支持黑桃担保，私下交易存在高风险，属个人行为，谨防上当受骗。如有交易纠纷，黑桃概不负责。
  </div>
</template>
<script setup name="TipsToDeal">
const props = defineProps({
  gurantee: {
    type: Boolean,
    default: false
  }
})

</script>
<style lang="scss" scoped>
.tips {
  padding: 10px 15px;
  background-color: rgba(45, 227, 112, 0.1);
  color: rgb(1, 160, 74);
  .link-btn {
    border: 1px solid rgba(1, 160, 74, 0.32);
    background-color: transparent;
    padding: 3px 4px;
    margin: 0 4px;
    font-weight: 700;
    // font-size: 12px;
    color: rgb(1, 160, 74);
  }
  b {
    font-weight: 700;
    text-decoration: underline;
  }
}
.warn-tips {
  line-height: 22px;
  padding: 10px 15px;
  color: $bg-red;
  background-color: rgba(227, 60, 45, 0.1);
}
.deal-icon {
  height: 35px;
  margin-right: 10px;
}
.txt {
  line-height: 20px;
}
</style>
