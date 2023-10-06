/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/standard'
    // '@vue/eslint-config-prettier'
  ],
  rules: {
    semi: ['error', 'never'],
    'no-unused-vars': 'off',
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'off'
  }
}
