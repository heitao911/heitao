<template>
  <div class="footer-wrap">
    <div class="tipsWrap">
      <div class="tips">
        <div class="title">
          <el-icon>
            <i-ep-Warning />
          </el-icon>
          免责声明：
        </div>
        <overstep-hidden :content='content' :rows="2" @showDetail="showMessage"></overstep-hidden>
      </div>
    </div>
    <div class="footer">
      <div>
        <a href="https://t.me/heitaogf" target="_blank">关于黑桃</a>
        <a href="https://t.me/heitaogf" target="_blank">联系我们</a>
      </div>
      <div :span="12">
        <div>Copyright 2019 HEITAO</div>
      </div>
    </div>
  </div>

</template>

<script setup name="Footer">
// import { ref } from 'vue'

const content = ref('浏览使用本站时请注意核实信息的准确性或完整性，若未经黑桃（www.heitao.org）担保，私下产生交易纠纷，黑桃（www.heitao.org）概不负责。任何机构或者个人不得以任何方式修改或非法使用本站内容。此外，您同意不假冒任何个人或实体、不虚假声明或谎称与任何个人或实体之间的关系。黑桃担保不参与客户具体业务，交易过程中双方的一切沟通及交易需要在黑桃官方担保人员创建的交易群中进行，最终解释权归黑桃（www.heitao.org）所有。')
const iconList = ref([
  {
    linkUrl: 'https://www.facebook.com/BASISInternationalSchools/',
    iconClass: 'facebook',
    iconText: 'Facebook',
    title: 'Like us on Facebook at BASIS International Schools'
  },

  {
    linkUrl: 'mailto:info@basis-global.com',
    iconClass: 'emailUs',
    iconText: 'Email Us',
    title: 'Email us'
  },

  {
    linkUrl: 'https://www.linkedin.com/company/basis-international-schools',
    iconClass: 'linkedin',
    iconText: 'LinkedIn',
    title: 'Connect with us on LinkedIn'
  },

  {
    linkUrl: 'http://blog.basisinternationalschools.com/',
    iconClass: 'blog',
    iconText: 'Blog',
    title: 'Read our updates'
  },

  // {
  //   linkUrl: "http://blog.basisinternationalschools.com/",
  //   iconClass: "wechat",
  //   iconText: "Wechat",
  //   title: 'Follow us on Wechat'
  // },

  {
    linkUrl: 'https://www.instagram.com/basisinternationalschools/',
    iconClass: 'instagram',
    iconText: 'Instagram',
    title: 'Follow us on Instagram'
  }
])

const showMessage = () => {
  ElMessageBox.alert(content.value, '免责声明', {
    // if you want to disable its autofocus
    autofocus: false,
    showConfirmButton: false
  })
}
</script>

<style scoped lang="scss">
.footer-wrap {
  width: 100%;
  min-width: 1420px;
  height: 200px;
  background: $bg-black;
  .tipsWrap {
    background-color: $bg-red;
    width: 100%;
    .tips {
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px 0;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      .title {
        margin-top: 5px;
        flex-shrink: 0;
        color: rgb(19, 22, 25);
        font-weight: 700;
      }
    }
  }
  .footer {
    color: #fff;
    max-width: 1200px;
    padding: 20px 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    a {
      color: $bg-red;
      margin-right: 30px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
:deep(.overstep) {
  .detailed-introduce {
    border: 0;
  }
  * {
    background-color: $bg-red;
    color: rgb(19, 22, 25);
  }
}
@media (max-width: 600px) {
}
</style>
