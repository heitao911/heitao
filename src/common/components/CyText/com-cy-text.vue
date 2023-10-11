<!--
 * @Descripttion: 使用方式
 *  <cy-text :value="value || '-'" />
-->
<template>
  <el-tooltip placement="top" v-model="isShowHover" :open-delay="500" effect="dark" :disabled="!isShowHover">
    <slot name="content">{{ tipValue||value }}</slot>
    <div @mouseenter="showTips($event,value)" class="myNote" :style="getStyle()">{{ value }}</div>
  </el-tooltip>

</template>
<script>
export default {
  // 显示文字组件，可以设置最多显示几行，超过后会隐藏并且鼠标hover显示全部信息
  name: 'CyText',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    tipValue: {
      type: String,
      default: ''
    },
    row: {
      // 最多显示几行，超过后会...隐藏 为0时不隐藏
      type: Number,
      default: 2
    }
  },
  computed: {

  },
  data () {
    return {
      isShowHover: false
    }
  },
  watch: {

  },
  mounted () {
  },
  beforeUnmount () { },
  methods: {
    showTips (obj, title) {
      /* obj为鼠标移入时的事件对象 */
      /* currentWidth 为文本在页面中所占的宽度，创建标签，加入到页面，获取currentWidth ,最后在移除 */
      const TemporaryTag = document.createElement('span')
      TemporaryTag.innerHTML = title
      TemporaryTag.className = 'getTextWidth'
      document.querySelector('body').appendChild(TemporaryTag)
      const currentWidth = document.querySelector('.getTextWidth').offsetWidth + 10
      document.querySelector('.getTextWidth').remove()

      /* cellWidth为表格容器的宽度 */
      const cellWidth = obj.target.offsetWidth

      /* 当文本宽度小于||等于容器宽度两倍时，代表文本显示未超过两行 */
      currentWidth <= (this.row * cellWidth) ? this.isShowHover = false : this.isShowHover = true
    },
    getStyle () {
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box !important',
        webkitLineClamp: this.row,
        webkitBoxOrient: 'vertical',
        wordBreak: 'break-all'
        // cursor: 'pointer'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
:deep(.el-tooltip) {
  cursor: inherit !important;
}
</style>

<style>
.el-tooltip__popper div {
  white-space: pre-line;
}
.getTextWidth {
  white-space: nowrap;
}
</style>
