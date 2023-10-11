import { defineStore, acceptHMRUpdate } from 'pinia'

export const useChannelStore = defineStore('channel', {
  state: () => ({
    dataList: [
      {
        name: '游戏招商',
        sorts: ['游戏代理', '游戏独代', '游戏联运'],
        img: '20230407151039.png',
        link: 'https://www.k36group.com/'
      },
      {
        name: '游戏包网',
        sorts: ['游戏包网', '数字货币包网'],
        img: '20230630105431.png',
        link: 'https://www.dbgaming.com/Home'
      },
      {
        name: '游戏API',
        sorts: ['游戏API'],
        img: '20230630104900.png',
        link: 'https://t.me/kin_kaqiusha'
      },
      {
        name: '支付渠道',
        sorts: ['全球支付', '承兑换汇', 'U兑换'],
        img: '20230407144118.png',
        link: 'https://t.me/Junepay_M'
      },
      {
        name: '营销渠道',
        sorts: ['Google', 'Facebook', 'Telegram', 'Tiktok', 'ASO/ASM',
          'SEO/SEM', '线下流量', '流量变现', '网红KOL', '其他流量'],
        img: '20230407144502.png',
        link: 'https://t.me/heitaoch002'
      },
      {
        name: '云服务',
        sorts: ['服务器',
          'CDN/安防',
          '国际短信',
          '数据统计'
        ],
        img: '20230407144502.png',
        link: 'https://t.me/JunePay999'
      }, {
        name: '技术外包',
        sorts: ['交易所开发',
          '游戏搭建',
          '设计外包',
          '企业签名',
          'App开发',
          '本地测试',
          '其他系统开发'],
        img: '20230407144502.png',
        link: 'https://t.me/Junepay_M'
      },
      {
        name: 'WEB 3.0',
        sorts: ['WEB 3.0',
          '钱包合作',
          '币圈项目方',
          '交易所代理'],
        img: '20230407144502.png',
        link: 'https://t.me/heitaoch002'
      }, {
        name: '媒体渠道',
        sorts: ['博娱媒体',
          '币圈媒体',
          '华人媒体'],
        img: '20230407144502.png',
        link: 'https://t.me/JunePay999'
      }, {
        name: '本地服务',
        sorts: ['翻译服务',
          '客服外包',
          '注册财税',
          '配音视频',
          '投放素材'
        ],
        img: '20230407144502.png',
        link: 'https://t.me/JunePay999'
      }
    ]
  }),
  getters: {
    items: (state) => {

    }
  },
  actions: {
    addItem (name) {
    },
    removeItem (name) {
    },
    async purchaseItems () {
      // const user = useUserStore()
      // if (!user.name) return
      const n = this.items.length
      this.rawItems = []
      return n
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useChannelStore, import.meta.hot))
}
