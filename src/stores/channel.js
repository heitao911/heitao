import { defineStore, acceptHMRUpdate } from 'pinia'

export const useChannelStore = defineStore('channel', {
  state: () => ({
    sortList: [
      {
        name: '业务列表',
        sorts: [],
        img: '20230407151039.png',
        link: 'https://www.k36group.com/'
      },
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
    ],
    dataList: [{
      pName: '',
      records: [
        {
          id: 12534,
          userName: 'BUKA国际短信',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195357.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230718/3f8f184d-47f7-41eb-a113-6c7b641e4d22.jpg',
          position: '市场',
          logo: null,
          title: '东南亚国际短信 / WhatsApp business api / 国际语音外呼/群呼-全球直连-16年品牌',
          ty: 1,
          tyStr: '我提供',
          type: 7,
          typeStr: '云服务',
          businessSubdivide: '70',
          businessSubdivides: {
            70: '数据统计'
          },
          region: '15|11|21',
          regions: {
            21: '印尼',
            11: '巴西',
            15: '印度'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: 'buka sms',
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697193680'
        },
        {
          id: 11771,
          userName: 'CQ9-WEN',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230831/50224090-09f9-4457-8a5e-b4df6d63eaad.jpeg',
          position: '業務經理',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230831/bb21a9d7-96a2-4ac7-99d4-72b5bb245eb6.jpeg',
          title: 'CQ9 Gaming 電子及真人遊戲API',
          ty: 1,
          tyStr: '我提供',
          type: 3,
          typeStr: '游戏API',
          businessSubdivide: '12',
          businessSubdivides: {
            12: '游戏API'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '5',
          industryStr: '游戏',
          industrySubdivide: '17|19|20',
          industrys: {
            17: '综合博弈',
            19: '真人视讯',
            20: '老虎机'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697193665'
        },
        {
          id: 12300,
          userName: 'K36官方',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926184554.png',
          position: '商务',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230926/19c244e6-eab5-407a-8f70-c8ba3b0e8018.png',
          title: 'K36东南亚包网搭建站服务、支持多语言、游戏API转售',
          ty: 1,
          tyStr: '我提供',
          type: 1,
          typeStr: '游戏包网',
          businessSubdivide: '6',
          businessSubdivides: {
            6: '游戏包网'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '1',
          industryStr: '游戏',
          industrySubdivide: '1',
          industrys: {
            1: '综合博弈'
          },
          isTop: 1,
          firmName: 'K36',
          firmVerify: true,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697193641'
        },
        {
          id: 12559,
          userName: '开云商务小夜',
          vipLogo: '',
          headUrl: 'http://file.huidu.io/avatar/12.png',
          position: '招商经理',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231013/927c7a41-7e12-436f-8db2-cb290e38aa9c.png',
          title: '开云体育代理合营零门槛',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697176454'
        },
        {
          id: 1262,
          userName: 'OKpay全球付',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20220920/d6dbbc1f-6012-4668-919c-d31ce884b598.jpg',
          position: '市场部经理',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-07/20231007222155.png',
          title: '印度原生支付 D0，U回，成功率80%+',
          ty: 1,
          tyStr: '我提供',
          type: 0,
          typeStr: '支付渠道',
          businessSubdivide: '61',
          businessSubdivides: {
            61: '全球支付'
          },
          region: '15',
          regions: {
            15: '印度'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: 'okpay',
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163868'
        },
        {
          id: 7938,
          userName: '海外支付阿东',
          vipLogo: '',
          headUrl: 'http://file.huidu.io/avatar/1.png',
          position: '渠道总监',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230316/e6f8fc6e-e17b-44a2-a6b8-e0ca139dbc10.png',
          title: '土耳其 孟加拉 印度 巴西原生游戏支付',
          ty: 1,
          tyStr: '我提供',
          type: 0,
          typeStr: '支付渠道',
          businessSubdivide: '61',
          businessSubdivides: {
            61: '全球支付'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: 'Fastpay',
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697163861'
        },
        {
          id: 11579,
          userName: 'HKP-商务',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'http://file.huidu.io/avatar/4.png',
          position: '商务',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/7f379b20-2412-4876-b93d-2002cf2b824f.jpg',
          title: 'HKPPAY，专业支付30年，巴西持牌机构提供源头支付，安全、稳定，专为游戏、bet提供一站式支付服务',
          ty: 1,
          tyStr: '我提供',
          type: 0,
          typeStr: '支付渠道',
          businessSubdivide: '61',
          businessSubdivides: {
            61: '全球支付'
          },
          region: '11|12|21',
          regions: {
            21: '印尼',
            11: '巴西',
            12: '菲律宾'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163853'
        },
        {
          id: 12127,
          userName: '灰度Max',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2022-12-13/20221213124647.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221108/f11844b3-409c-4599-a50d-9cdcaead0285.png',
          position: '运营主管',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920164138.png',
          title: '灰度SIGMA马耳他酒会招商！',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: '灰度集团',
          firmVerify: true,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163845'
        },
        {
          id: 4840,
          userName: 'CASHPAY',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9269820c-6a90-496c-aaf4-08c98869803a.png',
          position: '运营总监',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221114/12f22392-3d48-4c29-8216-6f1306568efb.jpg',
          title: '巴西支付源头',
          ty: 1,
          tyStr: '我提供',
          type: 0,
          typeStr: '支付渠道',
          businessSubdivide: '61',
          businessSubdivides: {
            61: '全球支付'
          },
          region: '11',
          regions: {
            11: '巴西'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: 'CASHPAY',
          firmVerify: true,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163835'
        },
        {
          id: 11492,
          userName: 'No钱包 Titus',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230609/7406b686-85d7-417a-b109-379ff7391e7b.jpg',
          position: '商务负责人',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230819/76e419ce-8773-4850-b7fb-24a8bae2068c.png',
          title: '【NO钱包】NO.com 专业RMB、USDT通道，提现免费，摆脱冻结及跑单，彻底解决支付痛点，无痕兑换守护资产安全，诚邀各大商户及代理入驻合作',
          ty: 1,
          tyStr: '我提供',
          type: 0,
          typeStr: '支付渠道',
          businessSubdivide: '61',
          businessSubdivides: {
            61: '全球支付'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: 'No钱包',
          firmVerify: true,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163826'
        },
        {
          id: 9630,
          userName: '彩虹抖抖',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230609/c244be04-0c64-40f7-abdd-4b5fac778e62.jpeg',
          position: '市场部总监',
          logo: null,
          title: '巴西H5投放寻优秀产品合作',
          ty: 1,
          tyStr: '我提供',
          type: 4,
          typeStr: '营销渠道',
          businessSubdivide: '19',
          businessSubdivides: {
            19: 'Facebook'
          },
          region: '11|18|7',
          regions: {
            18: '越南',
            7: '泰国',
            11: '巴西'
          },
          industry: '16',
          industryStr: '游戏',
          industrySubdivide: '32',
          industrys: {
            32: '真金游戏'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163818'
        },
        {
          id: 11511,
          userName: '小峰',
          vipLogo: '',
          headUrl: 'http://file.huidu.io/avatar/11.png',
          position: '市场总监',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230821/915468e4-50db-42d1-a7dd-583d79417c80.jpg',
          title: 'Fastpay5年老牌支付 巴西   墨西哥  埃及   菲律宾 源头冰点费率',
          ty: 1,
          tyStr: '我提供',
          type: 0,
          typeStr: '支付渠道',
          businessSubdivide: '61',
          businessSubdivides: {
            61: '全球支付'
          },
          region: '11|12|13',
          regions: {
            11: '巴西',
            12: '菲律宾',
            13: '墨西哥'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: '成都行付天下科技有限公司',
          firmVerify: true,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163810'
        },
        {
          id: 11576,
          userName: 'Santos',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727174637.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-25/20230825171244.png',
          position: '市场经理',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/3533abf1-cf59-4504-9ba6-125ef881d00e.jpg',
          title: '皇家娱乐，招商代理，游戏丰富实力雄厚',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '15|11|18',
          regions: {
            18: '越南',
            11: '巴西',
            15: '印度'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163804'
        },
        {
          id: 12024,
          userName: '海外流量代投',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9df07a92-2dbd-47cf-b108-17cfa429afc9.jpg',
          position: '商务',
          logo: null,
          title: '出海广告代投，GG,TT,FB,KWAI代投',
          ty: 1,
          tyStr: '我提供',
          type: 4,
          typeStr: '营销渠道',
          businessSubdivide: '18',
          businessSubdivides: {
            18: 'Google'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163791'
        },
        {
          id: 11575,
          userName: 'alfapay',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/4a33b338-bb35-4a74-b015-96736cce2106.jpg',
          position: '商务经理',
          logo: null,
          title: '东南亚支付、承兑、金流系统承租',
          ty: 1,
          tyStr: '我提供',
          type: 0,
          typeStr: '支付渠道',
          businessSubdivide: '83',
          businessSubdivides: {
            83: '承兑换汇'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697106396'
        },
        {
          id: 12118,
          userName: 'DB Gaming',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920102245.png',
          position: '市場',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920102417.png',
          title: 'DB游戏/KM包网 API接口',
          ty: 1,
          tyStr: '我提供',
          type: 3,
          typeStr: '游戏API',
          businessSubdivide: '12',
          businessSubdivides: {
            12: '游戏API'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: 'DB Gaming',
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697106387'
        }
      ]
    }, {
      pName: '游戏招商',
      records: [
        {
          id: 12559,
          userName: '开云商务小夜',
          vipLogo: '',
          headUrl: 'http://file.huidu.io/avatar/12.png',
          position: '招商经理',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231013/927c7a41-7e12-436f-8db2-cb290e38aa9c.png',
          title: '开云体育代理合营零门槛',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          details: '',
          introduce: {
            imgs: ['https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-13/20231013103206.png'],
            content: '【开云代理】\n1、55%会员净输赢分红\n2、独立代理后台，一对一官方维护\n3、人头费（2998-299998元）无上限}'
          },
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697176454'
        },
        {
          id: 12127,
          userName: '灰度Max',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2022-12-13/20221213124647.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221108/f11844b3-409c-4599-a50d-9cdcaead0285.png',
          position: '运营主管',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920164138.png',
          title: '灰度SIGMA马耳他酒会招商！',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: '灰度集团',
          firmVerify: true,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1697163845'
        },
        {
          id: 11576,
          userName: 'Santos',
          vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727174637.png',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-25/20230825171244.png',
          position: '市场经理',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/3533abf1-cf59-4504-9ba6-125ef881d00e.jpg',
          title: '皇家娱乐，招商代理，游戏丰富实力雄厚',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          details: '',
          introduce: {
            imgs: [],
            content: '主打多币别充提快速到账\n极致游戏画面支持4k画质\n极多游戏平台，任君选择\n让您无时无刻享受极致游戏体验\n\n诚招代理！！！佣金无上限！！！\n实力招商，资金雄厚，佣金每周准时派发绝无拖欠！\n—24/7客服全天候服务，保证让宾客们宾至如归—\n网站多优惠出款快，查看名片可联系了解更多！'
          },
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '15|11|18',
          regions: {
            18: '越南',
            11: '巴西',
            15: '印度'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 1,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 1,
          views: null,
          updateTime: '1691625600'
        },
        {
          id: 12291,
          userName: '阿麒',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926175551.png',
          position: '招商',
          logo: '',
          title: '诚招代理 负盈利佣金55% 开线即送短域名 欢迎老板来询',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697193697'
        },
        {
          id: 12288,
          userName: '威震天',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926174608.png',
          position: '负责人',
          logo: '',
          title: '官方金牌招商，扶持期间55%佣金（后期无需新增）',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697193696'
        },
        {
          id: 12299,
          userName: '恭喜 发财',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926183906.png',
          position: '技术',
          logo: '',
          title: '乐娱包网 实力包网平台 性价比市面最高 简单开站',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697193695'
        },
        {
          id: 12326,
          userName: '文文',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927161827.png',
          position: '商务',
          logo: '',
          title: '全民代理-凯发招商 诚招代理 待遇丰厚 欢迎来聊',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697161196'
        },
        {
          id: 12292,
          userName: '经理',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926180150.png',
          position: '经理',
          logo: '',
          title: '游戏招商 招募会员 会员当日首存礼最高8888元',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697161195'
        },
        {
          id: 12301,
          userName: '瓦力',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926184317.png',
          position: '客服',
          logo: '',
          title: '瓦力游戏 TG视讯玩法震撼来袭',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '67',
          businessSubdivides: {
            67: '游戏独代'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '49',
          industryStr: '游戏',
          industrySubdivide: '54|55|56',
          industrys: {
            54: '捕鱼游戏',
            55: '棋牌游戏',
            56: '卡牌游戏'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697074961'
        },
        {
          id: 12327,
          userName: '张龙',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927162149.png',
          position: 'CEO',
          logo: '',
          title: '488体育诚招代理 开通最高50%返佣 欢迎来合作',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '',
          regions: null,
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697021138'
        },
        {
          id: 12075,
          userName: '百胜 小卫',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-18/20230918171235.png',
          position: '商务',
          logo: '',
          title: '新百胜赌场 主营：百家乐，龙虎，斗牛 资金安全可玩',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '67',
          businessSubdivides: {
            67: '游戏独代'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697002339'
        },
        {
          id: 12201,
          userName: 'TYC招代理',
          vipLogo: '',
          headUrl: 'http://file.huidu.io/avatar/12.png',
          position: '经理',
          logo: '',
          title: '太阳城招代理 有效新增人头费 上不封顶',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: '太阳城网上娱乐',
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697002338'
        },
        {
          id: 12269,
          userName: '华子',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926145602.png',
          position: '商务',
          logo: '',
          title: 'AG直营招代理 合作共赢 55%高额返佣',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1697002333'
        },
        {
          id: 11820,
          userName: 'fkai',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230904/825c6c75-4fed-4af5-ad2b-270092ee63b8.jpg',
          position: '市场经理',
          logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230904/ad4c84d5-ec63-4afd-999d-b06e01735c49.jpg',
          title: '海外多语言游戏平台，招募联合运营商、代理商出海捕鱼',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '68',
          businessSubdivides: {
            68: '游戏联运'
          },
          region: '11|12|21',
          regions: {
            21: '印尼',
            11: '巴西',
            12: '菲律宾'
          },
          industry: '50',
          industryStr: '游戏',
          industrySubdivide: '62',
          industrys: {
            62: '棋牌游戏'
          },
          isTop: 0,
          firmName: '卡洛思',
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1696922871'
        },
        {
          id: 12249,
          userName: '体育代理招商',
          vipLogo: '',
          headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230925/dd38a544-dde1-439a-87ce-fa7ed481dc03.jpg',
          position: '综合盘口',
          logo: '',
          title: '亚洲顶级体育官方代理招商 高佣金',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '82',
          businessSubdivides: {
            82: '游戏代理'
          },
          region: '|',
          regions: {
            0: '区域不限'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: 'OB游戏',
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1696902506'
        },
        {
          id: 11465,
          userName: '炒饭',
          vipLogo: '',
          headUrl: 'http://file.huidu.io/avatar/2.png',
          position: '商务主管',
          logo: null,
          title: '接上架代投联运，主营游戏类产品，主营地区：巴西，菲律宾，印度印尼',
          ty: 1,
          tyStr: '我提供',
          type: 17,
          typeStr: '游戏招商',
          businessSubdivide: '68',
          businessSubdivides: {
            68: '游戏联运'
          },
          region: '15|11|12',
          regions: {
            11: '巴西',
            12: '菲律宾',
            15: '印度'
          },
          industry: '|',
          industryStr: null,
          industrySubdivide: '',
          industrys: {
            0: '行业不限'
          },
          isTop: 0,
          firmName: null,
          firmVerify: false,
          originalLanguage: 'zh-CN',
          gurantee: 0,
          views: null,
          updateTime: '1696822078'
        }
      ]
    }],
    // 合作列表页  广告
    adList: [
      {
        img: '20230928121323.jpeg',
        link: 'https://www.k36group.com/'
      },
      {
        img: '20231009132956.jpeg',
        link: 'https://www.k36group.com/'
      },
      {
        img: '20230901161946.jpeg',
        link: ''
      }
      // {
      //   img: '20230901161946.jpeg',
      //   link: ''
      // },
      // {
      //   img: '20230901161946.jpeg',
      //   link: ''
      // }
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
