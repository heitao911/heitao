// import Vue from 'vue'
// process.env.NODE_ENV && (window.Vue = Vue)
const cache = import.meta.globEager('./*/*.vue')
// console.log(cache)
export default {
  install (app) {
    Object.keys(cache).forEach((key) => {
      // console.log(key, cache[key])
      app.component(cache[key].default.name, cache[key].default)
    })
  }
}
