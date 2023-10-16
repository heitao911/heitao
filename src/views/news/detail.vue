<template>
  <article class="cooperationDetail-article" v-cloak>
    <header>
      <div class="flex header-main">
        <div class="avatar-wrap" v-if="detailData.logo">
          <el-avatar class="avatar" shape="square" :size="100" :src="detailData.logo" fit="contain" />
        </div>
        <div class="title-wrap">
          <h1 class="title">{{ detailData.title }}</h1>
          <div class="flex jsb header-wrap">
            <div class="table-sort">
              <img class="offer-img" src="@/assets/images/img/offer.png" alt="">
              {{ detailData.typeStr }}-{{ detailData.businessSubdivides[detailData.businessSubdivide] }}
              <div class="vertical-divider"></div>
              <span v-for="(e, i) in getIndustry(detailData)" :key="i">{{ e }}</span>
              <div class="vertical-divider"></div>
              <span v-for="(e, i) in getRegion(detailData)" :key="i">{{ e }}</span>
            </div>
            <div>
              <el-button class="deal-btn" type="success" plain>获取联系</el-button>
              <el-button v-if="detailData.gurantee" class="deal-btn" type="success" @click="guranteeFn">担保交易</el-button>
            </div>
          </div>
          <div class="flex aic">
            <div class="danbao" v-if="detailData.gurantee || detailData.firmVerify">
              <img v-if="detailData.gurantee" src="@/assets/images/img/danbao.png" alt="担保交易">
              <img v-if="detailData.firmVerify" src="@/assets/images/img/company-cn.png" alt="企业担保">
            </div>
            <div class="gray">{{ getTimeAgo(detailData.updateTime + '000') }} &nbsp;更新</div>
          </div>
        </div>
      </div>
      <TipsToDeal :gurantee="!!detailData.gurantee"></TipsToDeal>
    </header>
    <article class="content">
      <section class="left" v-loading="state.loading">
        <template v-if="detailData.details">
          <h2>业务明细</h2>
          <div class="content-des">
            {{ detailData.details }}
          </div>
        </template>
        <template v-if="detailData.introduce">
          <h2>业务简介</h2>
          <div class="content-intro">
            <div class="text">{{ detailData.introduce.content }}</div>
            <el-image v-for="url in detailData.introduce.imgs" :key="url" :src="url" :preview-src-list="[url]" lazy />
          </div>
        </template>
        <el-empty class="empty" v-if="!detailData.details && !detailData.introduce" description="暂无简介" />
        <section class="tips">
          <h3>防骗提醒</h3>
          <ol>
            <li>1、联系对接资源服务前请认真核查对方身份及经营资质，切勿轻信贪图便宜和承诺。</li>
            <li>2、任何冒充官方工作人员要求预付定金或者付款的行为，均可能存在诈骗风险，请提高警惕。</li>
            <li>3、黑桃平台不介入任何交易过程，交易时请您提高警惕，以免蒙受损失。</li>
            <li>4、如遇冒充黑桃工作人员进行行骗的，请及时联系官方核实举报，如若查实永久封禁。</li>
          </ol>
        </section>
      </section>
      <aside class="right">
        <a :href="item.link" target="_blank" class="link" v-for="(item, i) in state.adList" :key="i">
          <div class="img-cover">
            <img :src="getImageUrl('channel', item.img)" class="el-image__inner" alt="广告" title="广告" />
          </div>
          <div class="span">广告</div>
        </a>
      </aside>
    </article>

  </article>
</template>
<script setup name="CooperationDetail">
import { useChannelStore } from '@/stores/channel'
import { getTimeAgo } from '@/utils/tools'

const TipsToDeal = defineAsyncComponent(() => import('./TipsToDeal.vue'))
const route = useRoute()
const channel = useChannelStore()
const detailData = ref({})
const state = reactive({
  loading: true,
  allDataList: channel.dataList,
  adList: channel.adList
})
onBeforeMount(() => {
  const id = route.query.id || ''
  let list = []
  state.allDataList.forEach(obj => {
    list = list.concat(obj.records)
  })
  list.forEach(e => {
    if (e.id + '' === id) {
      detailData.value = e
    }
  })
  console.log(detailData.value)
  setTimeout(() => {
    state.loading = false
  }, 1000)
})

const getIndustry = (obj) => {
  const indexs = obj.industry.split('|').filter(e => e !== '')
  let strs = ''
  if (!indexs.length) return obj.industrys ? obj.industrys[0] : ''
  indexs.forEach(i => {
    obj.industrys[i] && (strs += obj.industrys[i])
  })
  return strs || '行业不限'
}
const getRegion = (obj) => {
  const indexs = obj.region.split('|').filter(e => e !== '')
  let strs = ''
  if (!indexs.length) return obj.regions ? obj.regions[0] : ''
  indexs.forEach(i => {
    obj.regions[i] && (strs += obj.regions[i])
  })
  return strs || '区域不限'
}
const guranteeFn = () => {
  window.open('https://t.me/heitaoch004', '_blank')
}
</script>
<style lang="scss" scoped>
article.cooperationDetail-article {
  width: 100%;
  background: $bg-background;
  header {
    width: 1200px;
    margin: 0 auto;
    min-height: 100px;
    margin-bottom: 10px;
    background-color: white;
    padding: 30px;
    box-sizing: border-box;
    .header-main {
      margin-bottom: 20px;
    }
    .avatar-wrap {
      margin-right: 12px;
    }
    .title-wrap {
      flex-grow: 1;
      h1.title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
    .header-wrap {
      height: 42px;
      margin-bottom: 5px;
      .table-sort {
        color: $color-gray;
        display: flex;
        align-items: center;
        .offer-img {
          width: 70px;
          margin-right: 18px;
        }
      }
      .deal-btn {
        padding: 20px 20px;
        font-weight: 700;
        font-size: 16px;
        color: $bg-black;
        // color: rgb(48, 178, 107);
        border-color: rgb(48, 178, 107);
      }
    }

    .user-wrap {
      display: flex;
      align-items: center;

      .userName {
        color: rgb(51, 51, 51);
      }
      .position {
        color: $color-gray;
      }
      .companyName {
        background-color: rgb(246, 246, 246);
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 12px;
        margin-left: 10px;
        img {
          width: 12px;
          vertical-align: -2px;
        }
      }
    }

    .danbao {
      margin-right: 10px;
      img {
        width: 70px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  }
  article.content {
    width: 1200px;
    min-height: 90vh;
    margin: 0 auto;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 10px;
    .empty {
      padding: 50px 0;
    }
    .left {
      background-color: white;
      padding: 30px;
      h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .text {
        white-space: break-spaces;
        line-height: 25px;
        color: $color-gray;
        margin-bottom: 10px;
      }
      .tips {
        margin-top: 50px;
        background-color: $bg-gray;
        padding: 20px;
        border-radius: 15px;
        h3 {
          font-size: 16px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }
        ol li {
          color: gray;
          line-height: 22px;
        }
      }
    }
    .right {
      background-color: white;
      max-height: 500px;
      height: fit-content;
      overflow-y: auto;
      .link {
        position: relative;
        img {
          width: 100%;
        }
        div.span {
          position: absolute;
          right: 5px;
          top: 5px;
          padding: 5px;
          background-color: rgba(0, 0, 0, 0.4);
          color: rgb(254, 254, 254);
          --tw-bg-opacity: 0.2;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
