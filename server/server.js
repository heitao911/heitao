/**
 * Created by qingyun on 16/10/8.
*/

const http = require('http')
const https = require('https')
const url = require('url')
// 查询参数对象， 可以处理查询参数
const qs = require('querystring')

const server = http.createServer(function (req, res) {
  // res.setHeader('Access-Control-Allow-Credentials', 'true') // 当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Credentials，并且值为“true”  代表是否向页面暴露cookie
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'token,Content-Type,Content-Length, Authorization, Accept,X-Requested-With,domain,zdy' // 当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Headers，并且值为不能为“*”，需要具体配置  代表允许上传的请求头字段
  // ) // 指定允许的跨域请求字段。
  // 指定允许的跨域请求的来源。填写星号（*）表示全部域名；您也可以填写完整域名，例如http://www.aliyun.com。
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000') // 当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Origin，并且值为不能为“*”，需要具体配置
  // // res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')  // 指定允许的跨域请求方法。可同时设置多个方法，多个方法用英文逗号（,）分隔。
  // res.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36')
  // res.setHeader('cookie', 'HMF_CI=b3c1251ae411515df45936584295e18c62d3efe998a50f2a64dcb715d66bd063abeb0a566efc2ad7823fde8c5b5c9c52ef65c586cd40f992e3cdda4970e4ef6913; 21_vq=6') // 当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Origin，并且值为不能为“*”，需要具体配置

  res.writeHead(200, { 'Content-Type': 'text/html' })

  // console.log(url.parse(req.url));
  const query = url.parse(req.url).query// 对请求对象的URl进行解析，拿到？后面的查询参数字符串
  console.log(query)
  // 把查询参数字符串转化为对象，方便取值
  const queryObj = qs.parse(query)
  console.log(queryObj)
  if (queryObj.url === undefined) {
    console.log('url: 不存在')
    return
  };
  // 解析URL
  const urlObj = new url.URL(queryObj.url)
  // console.log(['urlObj:', urlObj])
  const client = urlObj.protocol === 'https:' ? https : http

  let URL = ''
  let callback = ''
  if (queryObj.key === 'wy') { // 请求网易时添加了一个随机数参数
    // 1.解析网易数据  的方法：
    URL = decodeURIComponent(queryObj.url)
    callback = queryObj.callback
  } else if (queryObj.key === 'xm') {
    // 2.解析喜马拉雅 数据的方法：
    const dataArr = query.split('&')
    callback = dataArr.pop().split('=')[1]
    URL = dataArr.join('&')
    URL = URL.slice(6)
  } else if (queryObj.key === 'hiudu') { // 请求网易时添加了一个随机数参数
    // 解析灰度数据：
    console.log('解析灰度数据：开始')
    URL = decodeURIComponent(queryObj.url)
    console.log('请求URL：', URL)
    // callback = queryObj.callback
  }
  // console.log([URL, callback])

  // 服务器 可以直接访问  服务器
  let resultData = ''
  // 通过此方法请求queryObj.myUrl对应的服务器的数据
  // http.get(queryObj.myUrl, function(request){     //  解析网易数据
  client.get(URL, function (request) { // 解析喜马拉雅 数据
    // 设置编码格式
    request.setEncoding('utf8')
    // 检测到有数据返回，就会调用第二个参数(函数)，result为返回数据
    console.log('statusCode：', request.statusCode)
    // console.log('headers：', request.headers)
    request.on('data', function (result) {
      // console.info();  //打印空白行
      // console.log('数据：', result)
      // 由于数据不是全部接收完毕，该方法会调用很多次，需要把数据拼接到resultData中去；
      resultData += result
    })
    // 数据全部接收完毕以后执行的操作
    request.on('end', function () {
      // 把所有的数据包括到 回调函数中，返回到前端
      // var str = queryObj.callback + '('+ JSON.stringify(resultData) + ')';
      // const str = callback + '(' + JSON.stringify(resultData) + ')'
      // const str = JSON.stringify(resultData)
      const str = resultData

      // 请求数据结束，响应数据（把数据发给请求者）
      res.end(str)
    })
  }).on('error', function (e) {
    // 当请求失败时把错误信息返回给请求者
    res.end(e.message)
  })
})
const port = 9999
server.listen(port)
console.log('Server runing at port:' + port)
