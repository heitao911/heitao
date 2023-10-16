/** 通过nodeJS搭建自己的代理服务器来解决跨域问题 */
const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// 使用第三方插件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())// 监听post请求,处理代理接口
app.post('/proxyApi', (req, res) => {
  const { body } = req// 获取post请求的请求参数let reqPhttps://eslint.org/docs/latest/rules/indentarams = {}for(const key in body) {reqParams = JSON.parse(key) // 获取到请求参数}// 设置响应头// 代理服务器设置CORS，允许跨域访问res.setHeader('Access-Control-Allow-Origin', '*') res.setHeader('Access-Control-Allow-Methods', '*') // 允许所有的请求方式const {url, method = "GET", ...resConfig} = reqParams || {}// node代理请求服务器axios({url,method,...resConfig}).then(result => {const {status, headers, data} = resultres.status(status)res.setHeader('content-type', headers['content-type'])res.end(JSON.stringify(data)) // 给客户端返回数据}).catch(err => {res.end(JSON.stringify(err))})
})// 监听请求
app.listen(8081, () => {
  console.log('服务启动成功，在8081端口监听请求....')
})
