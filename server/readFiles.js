const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('querystring')
const buf = new Buffer.alloc(1024)

function insertFile (filename, userName) {
  return new Promise((resolve, reject) => {
    fs.open(`./${filename}`, 'r+', function (err, fd) {
      if (err) {
        return console.error(err)
      }
      console.log('文件打开成功！----准备读取文件：')
      fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
          console.log(err)
        }
        console.log(bytes + '  字节被读取')
        // 仅输出读取的字节
        if (bytes > 0) {
          const dataObj = JSON.parse(buf.slice(0, bytes))
          // console.log(dataObj)
          if (dataObj.service_whiteName) {
            if (dataObj.service_whiteName.includes(userName)) {
              reject(new Error('该用户已存在！'))
            } else {
              dataObj.service_whiteName.push(userName)
              console.log(dataObj)
              writeFile(filename, JSON.stringify(dataObj))
              resolve('添加成功')
            }
          }
        }
      })
    })
  })
}
function readFile (filename) {
  fs.readFile(`./${filename}`, (err, data) => {
    if (err) {
      console.log(err)
      // res.writeHead(404, { 'Content-Type': 'text/plain' })
      // return res.end('Page not found')
    }
    // console.log(data)
    return data
    // res.writeHead(200)
    // res.end(data)
  })
}
function writeFile (filename, data) {
  console.log('准备写入文件')
  fs.writeFile(`./${filename}`, data, function (err) {
    if (err) {
      return console.error(err)
    }
  })
}

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return res.end()
  }
  const query = url.parse(req.url).query// 对请求对象的URl进行解析，拿到？后面的查询参数字符串
  console.log(query)
  // 把查询参数字符串转化为对象，方便取值
  const queryObj = qs.parse(query)
  console.log(queryObj)

  const filename = queryObj && queryObj.url
  const action = queryObj && queryObj.action

  if (action === 'insert') {
    insertFile(filename, queryObj.userName).then(data => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
      res.end(JSON.stringify({
        success: true,
        message: '添加成功'
      }))
    }).catch(err => {
      console.log(err)
      res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' })
      res.end(JSON.stringify({
        success: false,
        message: '该用户已存在！'
      }))
    })
  } else {
    fs.readFile(`./${filename}`, (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        return res.end('Page not found')
      }
      // console.log(data)
      res.writeHead(200)
      res.end(data)
    })
  }
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})
