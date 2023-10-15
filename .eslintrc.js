/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    // '@vue/standard'
    'plugin:vue/vue3-essential',
    'standard',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: ['error', 'never'],
    'no-unused-vars': 'off',
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'prettier/prettier': 'off',
    'no-debugger': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'space-before-function-paren': 'off',
    'no-multi-str': 'off'
  }
}
