const https = require('https')
const fs = require('fs')
const cheerio = require('cheerio')
// 3.爬取去哪儿网站首页的图片，并下载图片到本地？
let url = 'http://localhost:3005/static/json/data.json'

https.get(url,(res)=>{
  // console.log(res);
  // 监听data事件
  let resData = ''
  res.on('data',(chunk)=>{
    // 请求到的数据会分段传输，每接收到一段数据就会触发一次data事件
    // chunk是分段数据，默认二进制数据流
    console.log('接收到一段数据。。。')
    console.log(chunk.toString())
    resData += chunk.toString()
  })
  res.on('end',()=>{
    // 数据流传输完毕时触发end事件
    // console.log( resData )
    let $ = cheerio.load(resData)
    $('img').each((index,item)=>{
      // console.log( $(item).attr('src') );
      let imgUrl = $(item).attr('src')
      if (/^\/\//.test(imgUrl)) {
        imgUrl = 'https:'+imgUrl
      }
      // console.log(imgUrl)

      let reg = /(\.(jpg|png|gif))/g
      reg.test(imgUrl)
      // console.log( RegExp.$1 )
      saveImg(imgUrl,RegExp.$1)
    })
  })
})

// 把下载的图片放在imgs文件夹中
fs.readdir('./',(err,files)=>{
  if (files.includes('imgs')) {
    console.log('imgs文件夹已存在')
  } else {
    fs.mkdir('./imgs',(err)=>{
      if (err) {
        console.log('创建失败');
      } else {
        console.log('创建成功');
      }
    })
  }
})

let num = 0
function saveImg(imgurl,flag){
  
  https.get(imgurl,(res)=>{
    let str = ''
    res.setEncoding('binary') //设置编码为二进制数据
    res.on('data',(chunk)=>{
      str += chunk
    })
    res.on('end',()=>{
      num++
      fs.writeFile('./imgs/download'+num+flag,str,'binary',(err)=>{
        if (err) {
          console.log('下载失败');
        } else {
          console.log('下载成功');
        }
      })
    })
  })
}