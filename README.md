# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

```JS
<script async src="https://ga.jspm.io/npm:es-module-shims@1.4.6/dist/es-module-shims.js"></script>
<script type="importmap">
    {
    "imports": {
        "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
    }
</script> 
```

```JS

fetch('https://www.huidu.io/api/resource/provide/pageList', {
  method: 'post',
  body: JSON.stringify({ page: 1, limit: 16, keySearch: '', type: '1', businessSubdivide: '', region: '', industry: '', sort: '1', gurantee: '' })
}).then(e => {
  e.json().then(e => {
    console.log(e)
  })
})

```
