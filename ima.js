const express = require('express')
const path = require('path')
const app = express()


// 内置中间件static，定义一个目录作为静态资源目录
// 服务启动后，静态资源目录中的静态资源可以直接访问
// 静态资源目录相当于之前我们使用的www目录
// express.static(静态资源目录的绝对路径)
// __dirname 返回当前目录的绝对路径
app.use('/static',express.static(path.join(__dirname,'./public')))

app.listen(3005,()=>{
  console.log('启动服务器成功')
})