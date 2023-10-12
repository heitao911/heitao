<template>
  <!-- 默认三行高度超出隐藏 -->
  <!-- 注意：此组件显示在页面时，才可以计算出高度，否则计算不准。可以在此组件调用时加v-if -->
  <div class="overstep">
    <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
      <div class="intro-content" ref="desc">
        <span class="merchant-desc" :data-title="content" v-if="content" v-html="content">
        </span>
        <div class="unfold" @click="showTotalIntro" v-if="showExchangeButton && !showMessageButton">
          <p>{{ exchangeButton ? '...显示' : '隐藏' }}
            <el-icon>
              <i-ep-arrow-down v-if="exchangeButton" />
              <i-ep-arrow-up v-else />
            </el-icon>
          </p>
        </div>
        <div class="unfold detail" @click="showDetail" v-if="showMessageButton">
          <p>...详情
            <el-icon>
              <i-ep-arrow-right />
            </el-icon>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overstepHidden',
  props: {
    content: {
      type: String,
      default: ''
    },
    // 默认显示3行，超出隐藏
    rows: {
      type: Number,
      default: 3
    },
    showMessageButton: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // 是否展示所有文本内容
      showTotal: true,
      // 显示展开还是收起
      exchangeButton: true,
      // 是否显示展开收起按钮
      showExchangeButton: false
    }
  },
  mounted () {
    this.$refs.desc.style.maxHeight = (21 * this.rows + 1) + 'px'
    this.checkContent()
  },
  methods: {
    showTotalIntro () {
      // console.log(this.showTotal);
      this.showTotal = !this.showTotal
      this.exchangeButton = !this.exchangeButton
    },
    checkContent () {
      this.$nextTick(
        function () {
          // 判断介绍是否超过三行
          if (!this.$refs.desc) {
            // console.log('desc null');
            return
          }
          const descHeight = window.getComputedStyle(this.$refs.desc).height.replace('px', '')
          // console.log('descHeight:' + descHeight);
          // console.log('如果 descHeight 超过' + 2 * rem + '就要显示展开按钮');
          if (descHeight > 21 * this.rows) {
            // console.log('超过了三行');
            // 显示展开收起按钮
            this.showExchangeButton = true
            this.exchangeButton = true
            // 不是显示所有
            this.showTotal = false
          } else {
            // 不显示展开收起按钮
            this.showExchangeButton = false
            // 没有超过三行就显示所有
            this.showTotal = true
            // console.log('showExchangeButton', this.showExchangeButton);
            // console.log('showTotal', this.showTotal);
          }
        }.bind(this)
      )
    },
    showDetail () {
      this.$emit('showDetail')
    }
  },
  watch: {
    content: function () {
      this.checkContent()
    }
  }
}
</script>

<style lang="scss" scoped>
.total-introduce {
  padding-right: 100px;

  height: auto;
  min-height: 36px;
  overflow: hidden;
  font-size: 14px;
  color: #777777;

  background-color: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 5px 15px;
  box-sizing: border-box;

  .intro-content {
    line-height: 21px !important;
    .merchant-desc {
      width: 100%;
      line-height: 21px !important;
      white-space: pre-wrap;
    }
  }
  .unfold {
    display: block;
    z-index: 11;
    float: right;
    height: 21px;
    text-indent: 0;
    p {
      margin: 0;
      line-height: 24px;
      text-align: left;
      cursor: pointer;
      padding-left: 5px;
      box-sizing: border-box;
    }
  }
}
.detailed-introduce {
  min-height: 36px;
  z-index: 0;
  font-size: 14px;
  color: #777777;
  position: relative;
  overflow: hidden;

  background-color: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 5px 15px;
  box-sizing: border-box;
  .detail {
    p {
      font-weight: 700 !important;
      color: rgb(19, 22, 25) !important;
    }
    .el-icon {
      vertical-align: middle;
    }
  }
  .intro-content {
    // 最大高度设为3倍的行间距
    max-height: 63px;
    line-height: 21px;
    word-wrap: break-word;
    /*强制打散字符*/
    word-break: break-all;
    /*同背景色*/
    overflow: hidden;
    padding-right: 50px;

    .merchant-desc {
      width: 100%;
      line-height: 21px;
      white-space: pre-wrap;
    }
    &:after,
      // 这是展开前实际显示的内容
      &:before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      color: #434343;
      // overflow: hidden;
    }
    // 把最后最后一行自身的上面三行遮住
    &:before {
      display: block;
      overflow: hidden;
      z-index: -1;
      max-height: 42px;
      background: #ffffff;
    }
    &:after {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 63px;
      /*截取行数*/
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
      // text-indent: -12em;
      /*尾部留空字符数*/
      padding-right: 4em;
    }
    .unfold {
      z-index: 1;
      height: 21px;
      outline: 0;
      position: absolute;
      right: 0;
      bottom: 5px;
      text-indent: 0;
      p {
        margin: 0;
        line-height: 21px;
        text-align: left;
        cursor: pointer;
        padding-left: 5px;
        box-sizing: border-box;
      }
      .el-icon {
        vertical-align: middle;
      }
    }
  }
}
</style>
