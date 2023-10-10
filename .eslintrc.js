/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
    // '@vue/standard'
  ],
  rules: {
    semi: ['error', 'never'],
    'no-unused-vars': 'off',
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'prettier/prettier': 'off',
    'no-debugger': 'off',
    'no-console': 'off',
  }
}
