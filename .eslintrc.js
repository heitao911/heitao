module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  globals: {
    ELEMENT: true,
  },
  rules: {
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-mutating-props': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
